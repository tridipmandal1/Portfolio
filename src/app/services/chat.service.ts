import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client, IMessage} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import {ChatMessage} from "../models/ChatMessage";
import {BehaviorSubject} from "rxjs";
import {SendMessageRequest} from "../models/SendMessageRequest";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private userIdSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private chatIdSubject: BehaviorSubject<any> = new BehaviorSubject<string | null>(null);
  private messagesSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  public userId$ = this.userIdSubject.asObservable();
  public chatId$ = this.chatIdSubject.asObservable();
  public messages$ = this.messagesSubject.asObservable();

  private stompClient: Client = new Client();
  isConnected: boolean = false;
  constructor(
     private http: HttpClient
  ) {
    const storedUserId = localStorage.getItem('userId');
    const storedChatId = localStorage.getItem('chatId');
    if (storedUserId) {
      this.userIdSubject.next(storedUserId);
    }
    if (storedChatId) {
      this.chatIdSubject.next(storedChatId);
    }
  }

  initiateChat(email: string, userId: string, username: string) {
    this.http
      .post<any>(`${environment.socketUrl}/api/chat/initiate`, {email: email, userId: userId, username: username})
      .subscribe({
        next: (data) => {
          console.log('Initialized chat for', email, userId, 'with chatId:', data.id);
          this.chatIdSubject.next(data.id);
          localStorage.setItem('chatId', data.id);
          this.connectWebSocket();
        },
        error: (error) => console.error('Error initiating chat:', error)
      });
  }

  loadExistingChat() {
    this.http.get<{
      chatId: string;
      messages: ChatMessage[]
    }>(`${environment.socketUrl}/api/chat/history-by-user/` + this.userIdSubject.getValue()).subscribe({
      next: (data) => {
        console.log('Loaded existing chat for userId:', this.userIdSubject.getValue(), 'data:', data);
        if (data.chatId) {
          this.chatIdSubject.next(data.chatId);
          localStorage.setItem('chatId', data.chatId);
          console.log(data.messages)
          this.messagesSubject.next(data.messages);
          this.connectWebSocket();
        }
      },
      error: (error) => console.error('Error loading chat:', error)
    });
  }

  connectWebSocket() {
    if (!this.chatIdSubject.getValue()) {
      console.error('No chatId available for WebSocket connection');
      return;
    }

    // Initialize STOMP client
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS(`${environment.socketUrl}/ws`, null, {}),
      debug: (str) => console.log('STOMP Debug:', str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    this.stompClient.onConnect = () => {
      this.isConnected = true;
      console.log('WebSocket connected for chatId:', this.chatIdSubject.getValue());
      // Subscribe to chat-specific topic
      this.stompClient!.subscribe(`/topic/chat/${this.chatIdSubject.getValue()}`, (message: IMessage) => {
        const msg = JSON.parse(message.body) as any;
        console.log('Received message:', msg);

        this.messagesSubject.next([...this.messagesSubject.getValue(), msg]);


      });
      // Fetch initial chat history
      this.http.get<any>(`${environment.socketUrl}/api/chat/history/${this.chatIdSubject.getValue()}`).subscribe({
        next: (data) => {
          console.log('Initial chat history:', data);
              this.messagesSubject.next(data);
        },
        error: (error) => console.error('Error fetching history:', error)
      });
    };

    this.stompClient.onStompError = (error) => {
      console.error('WebSocket STOMP error:', error);
    };

    this.stompClient.onWebSocketError = (error) => {
      console.error('WebSocket error:', error);
    };

    this.stompClient.activate();
  }

  sendMessage(msg: SendMessageRequest) {
    console.log('Sending message to /app/chat/send:', msg);
    this.stompClient.publish({destination: '/app/chat/send', body: JSON.stringify(msg)});
  }

  disconnectWebSocket() {
    if (this.stompClient && this.isConnected) {
      this.stompClient.deactivate().then(() => console.log('WebSocket disconnected'));
    }
  }
}
