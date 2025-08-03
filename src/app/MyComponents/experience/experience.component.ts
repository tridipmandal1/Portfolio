import {Component, Input, OnInit} from '@angular/core';
import {Experience} from "../../models/Experience";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  @Input() experience: Experience[] = [];

  ngOnInit() {
  }
}
