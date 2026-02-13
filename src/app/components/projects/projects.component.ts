import {ChangeDetectionStrategy, Component} from '@angular/core';

export interface Project {
    title: string;
    points: string[];
    tags: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'page-enter-active'
    }
})
export class ProjectsComponent {

    projects: Project[] = [
        {
            title: 'Bioscope – Event & Ticket Booking Web Application',
            points: [
                'Developed a full-featured event ticket booking and hosting platform called Bioscope with separate backend and frontend codebases.',
                'Built the backend using Spring Boot (Java) and exposed RESTful APIs for user authentication, event management, and booking operations.',
                'Created a responsive and interactive frontend using Angular (TypeScript/HTML/CSS) for browsing events, managing bookings, and hosting events.',
                'Implemented multiple user roles (normal users and event hosts) with secure, role-based access control.',
                'Designed and integrated JWT-based authentication and authorization flows.',
                'Developed complete CRUD functionality for event listings, bookings, and user profiles.',
                'Integrated client-side routing and state management in Angular for seamless user experience.',
                'Connected frontend UI components with backend services following REST principles.',
                'Structured the codebase for modularity, maintainability, and scalability across backend services and UI modules.'
            ],
            imageUrl: '../assets/images/bioscope-thumb.png',
            tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'JWT', 'RazorPay'],
            githubUrl: 'https://github.com/tridipmandal1/Bioscope',

        },
        {
            title: 'Know-Calorie – AI-Driven Food Calorie Estimator',
            points: [
                'Developed Know-Calorie, a Python-based application that estimates the calorie content of food items directly from food images using computer vision and machine learning techniques.',
                'Implemented image processing and classification logic to identify food types from uploaded images and compute approximate caloric values without manual input.',
                'Structured the repository with separate components for data handling, model integration, and result visualization to support experimentation with models and datasets.',
                'Applied common image-based calorie estimation techniques such as feature extraction and classification models to automate nutritional analysis.',
                'Demonstrated practical AI application in health tech by reducing user effort in tracking dietary intake through automated analysis.'
            ],
            imageUrl: '../assets/images/know-calorie-thumb.png',
            tags: ['Python', 'TensorFlow', 'Deep Learning', 'Nutrition'],
            githubUrl:'https://github.com/tridipmandal1/Know-Calorie'
        }
    ]


}
