import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavBarComponent} from "./MyComponents/nav-bar/nav-bar.component";
import {HomeComponent} from "./MyComponents/home/home.component";
import {EducationComponent} from "./MyComponents/education/education.component";
import {ProjectsComponent} from "./MyComponents/projects/projects.component";
import {ExperienceComponent} from "./MyComponents/experience/experience.component";
import {ContactsComponent} from "./MyComponents/contacts/contacts.component";
import {NgClass, NgIf} from "@angular/common";
import {Profile} from "./models/Profile";
import {Contact} from "./models/Contact";
import {Education} from "./models/Education";
import {Project} from "./models/Project";
import {Experience} from "./models/Experience";
import {DataServiceService} from "./services/data-service.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ChatComponent} from "./MyComponents/modals/chat/chat.component";
import {InfoPromptComponent} from "./MyComponents/modals/info-prompt/info-prompt.component";
import {ChatService} from "./services/chat.service";
import {
  staticContacts,
  staticEducations,
  staticExperiences,
  staticProfile,
  staticProjects
} from "../assets/static/StaticData";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomeComponent, EducationComponent, ProjectsComponent, ExperienceComponent, ContactsComponent, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{

  profile: Profile = new Profile();
  contact: Contact = new Contact();
  educations: Education[] = [];
  projects: Project[] = [];
  experiences: Experience[] = [];
  title = 'Tridip\'s Portfolio';
  currentTab: string = 'home';
  isChatOpen: boolean = false;
  userId: string = '';
  chatId: string = '';
  isChatLoading= false;
  hasNewMessage: boolean = true;


  constructor(private elementRef: ElementRef, private dataService: DataServiceService,
              private chatPop: MatDialog,
              private chatService: ChatService) {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#023047';
  }

  getTab(name: string) {
    this.currentTab = name;
  }

  ngOnInit(): void {
    this.dataService.getProfile().subscribe({
      next: value => {
        this.profile = value.body;
      },
      error: err => {
        console.log(err);
      }
    });

    this.dataService.getEducation().subscribe({
      next: response => {
        this.educations = response.body;
      },
      error: err => {
        console.log(err);
      }
    });

    this.dataService.getContacts().subscribe({
      next: response => {
        this.contact = response.body;
      },
      error: err => {
        console.log(err);
      }
    });

    this.dataService.getProjects().subscribe({
      next: response => {
        this.projects = response.body;
      },
      error: err => {
        console.log(err);
      }
    });

    this.dataService.getExperience().subscribe({
      next: response => {
        this.experiences = response.body;
      },
      error: err => {
        console.log(err);
      }
    });

    this.chatService.userId$.subscribe(id => {
      this.userId = id;
    });
    this.chatService.chatId$.subscribe(id => {
      this.chatId = id;
    })
  }

  startChat() {
    this.isChatLoading = true;
    setTimeout( () => {
      this.isChatLoading = false;
      this.hasNewMessage = false;
    }, 500)
    if (this.userId === null || this.userId === ''
     || this.chatId === null || this.chatId === '') {
      const dialogRef
        = this.chatPop.open(InfoPromptComponent, {
        width: '500px',
        maxWidth: '90vw',
        disableClose: false,
        panelClass: 'custom-modal-panel'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result?.result === 'submit') {
          this.openChatBox({email: result.data.email, name: result.data.name});
        } else if (result?.result === 'cancel') {
          alert('Please fill out the form to start chatting.');
        }
      });
    } else {
    this.openChatBox();
  }
  }

  openChatBox(info?: any) {
    if (this.isChatOpen) {
      return;
    }
    this.isChatOpen = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '500px';
    dialogConfig.width = '400px';
    dialogConfig.position = {bottom: '5%', right: '10%'};
    if(info) {
      dialogConfig.data = info;
    }
    const dialogRef: MatDialogRef<any> =
      this.chatPop.open(ChatComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
      this.isChatOpen = false;
    });
  }
}
