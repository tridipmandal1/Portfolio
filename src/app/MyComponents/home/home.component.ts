import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Profile} from "../../models/Profile";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  @Input() profile : Profile = new Profile();
  ngOnInit(): void {
  }

  openCV() {
    const pdfUrl = 'assets/my-resume.pdf';
    window.open(pdfUrl, '_blank');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/my-resume.pdf';
    link.download = 'Tridip Mandal Resume.pdf';
    link.click();
  }
}
