import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {EducationComponent} from "./components/education/education.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ContactComponent} from "./components/contact/contact.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home - Tridip Mandal' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects - Tridip Mandal' },
    { path: 'education', component: EducationComponent, title: 'Education - Tridip Mandal' },
    { path: 'experience', component: ExperienceComponent, title: 'Experience - Tridip Mandal' },
    { path: 'contact', component: ContactComponent, title: 'Contact - Tridip Mandal' },
    { path: '**', redirectTo: '' }
];
