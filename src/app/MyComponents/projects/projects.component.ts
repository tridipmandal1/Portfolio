import {Component, Input, OnInit} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule} from "@angular/material/button-toggle";
import {Project} from "../../models/Project";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    NgForOf,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{

  filter: string = 'ALL';

  @Input() projects: Project[] = [];
    filteredProjects: Project[] = [];
  ngOnInit() {
    this.filterProjects();
  }

  toggleFilter(category: string) {
    this.filter = category;
    this.filterProjects();
  }

  filterProjects() {
    if(this.filter === 'ALL') {
      this.filteredProjects = this.projects;
      return;
    } else if (this.filter === 'SOFTWARE') {
      this.filteredProjects =
        this.projects.filter(pro => pro.category === 'SOFTWARE');
      return;
    } else if (this.filter === 'HARDWARE') {
      this.filteredProjects =
        this.projects.filter(pro => pro.category === 'HARDWARE');
      return;
    }
    return;
  }
}
