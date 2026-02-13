import {ChangeDetectionStrategy, Component} from '@angular/core';

interface Experience {
    date: string;
    title: string;
    company: string;
    description: string[];
    icon: string;
}
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'page-enter-active'
    }
})
export class ExperienceComponent {

    experiences: Experience[] = [
        {
            date: 'August 2025 - Present',
            title: 'Software Engineer',
            company: 'Capgemini',
            description: [
                'Working as a Workday Integration Developer.',
                'Designing integrations between Workday and external systems.',
                'Implementing and maintaining Workday integrations.',
                'Ensuring secure and reliable data exchange across systems.',
                'Developing applications using Workday Extend.',
                'Building scalable and maintainable enterprise solutions.',
                'Collaborating with stakeholders to gather integration requirements.',
                'Supporting testing, deployment, and ongoing production enhancements.'
            ],
            icon: 'linked_services'
        },
        {
            date: 'July 2024 - November 2024',
            title: 'Software Developer Intern',
            company: 'Floydee Infotech Pvt Ltd',
            description: [
                'Contributed to the backend development of Naree, a live production healthcare platform, using Spring Boot to build and enhance RESTful APIs.',
                'Implemented and maintained business logic, data handling, and API integrations aligned with real-world production requirements.',
                'Worked on both frontend and backend components for upcoming products, utilizing Angular for UI development and Spring Boot for server-side functionality.',
                'Collaborated with cross-functional teams to understand requirements, fix bugs, and improve system reliability and performance.',
                'Gained hands-on experience in production-level codebases, version control, and real deployment workflows.',
                'Exposure to end-to-end feature development, from API design to frontend integration, following industry best practices.'
            ],
            icon: 'sdk'
        }
    ];

}
