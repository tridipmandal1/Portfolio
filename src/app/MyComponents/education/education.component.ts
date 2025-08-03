import {Component, Input, OnInit} from '@angular/core';
import {Education} from "../../models/Education";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit{

  @Input() educations: Education[] = [];
  ngOnInit() {
  }

}
