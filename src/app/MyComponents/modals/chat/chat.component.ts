import {AfterViewChecked, Component, ElementRef, Inject, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatMessage} from "../../../models/ChatMessage";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ChatService} from "../../../services/chat.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild("chatMessages") private chatMessagesContainer!: ElementRef
  @ViewChild("messageInput") private messageInput!: ElementRef

  messages: ChatMessage[] = []
  chatId: string | null = ""
  userId: string | null = null
  email = ""
  newMessage = ""
  isSending = false

  private shouldScrollToBottom = false
  private lastMessageCount = 0

  constructor(private chatService: ChatService,
              @Inject(MAT_DIALOG_DATA) public matData: { email: string, name: string}) {}

  ngOnInit() {
    this.chatService.chatId$.subscribe((value) => {
      this.chatId = value
    })

    this.chatService.userId$.subscribe((value) => {
      this.userId = value
    })

    this.chatService.messages$.subscribe((messages) => {
      const newMessages = Array.isArray(messages) ? messages : [messages]
      if (newMessages.length > this.lastMessageCount) {
        this.shouldScrollToBottom = true
      }

      this.messages = newMessages
      this.lastMessageCount = newMessages.length
    })

    this.userId = localStorage.getItem("userId")
    if (!this.userId && (this.matData.email && this.matData.name)) {
        this.userId = this.matData.email + "$" + crypto.randomUUID()
        localStorage.setItem("userId", this.userId)
        this.initiateNewChat();
    } else {
      this.loadChats()
    }
  }

  ngAfterViewChecked() {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom()
      this.shouldScrollToBottom = false
    }
  }

  ngOnDestroy() {
    this.chatService.disconnectWebSocket()
  }

  initiateNewChat() {
    this.chatService
      .initiateChat(this.matData.email, this.userId!, this.matData.name)
  }

  loadChats() {
    this.chatService.loadExistingChat()
  }

  sendMessage() {
    console.log("Attempting to send message:", this.newMessage, "from userId:", this.userId, "chatId:", this.chatId)

    if (!this.newMessage.trim() || !this.chatId || !this.userId || !this.chatService.isConnected) {
      console.error("Cannot send message: invalid state", {
        newMessage: this.newMessage,
        chatId: this.chatId,
        userId: this.userId,
        isConnected: this.chatService.isConnected,
      })
      return
    }

    this.isSending = true

    const msg = {
      chatId: this.chatId,
      userId: this.userId,
      message: this.newMessage,
      fromAdmin: false,
    }

    this.chatService.sendMessage(msg)
    this.newMessage = ""
    this.shouldScrollToBottom = true

    // Reset sending state after a short delay
    setTimeout(() => {
      this.isSending = false
      // Focus back to input after sending
      if (this.messageInput) {
        this.messageInput.nativeElement.focus()
      }
    }, 500)
  }

  trackByMessageId(index: number, message: ChatMessage): string {
    return message.id
  }

  private scrollToBottom(): void {
    try {
      if (this.chatMessagesContainer) {
        const element = this.chatMessagesContainer.nativeElement
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          element.scrollTop = element.scrollHeight
        })
      }
    } catch (err) {
      console.error("Error scrolling to bottom:", err)
    }
  }
  downedToBottom() {
    this.scrollToBottom();
  }

  firstText() {
    this.ngOnInit();
  }
}
