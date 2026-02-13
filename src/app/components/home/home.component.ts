import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'page-enter-active'
    }
})
export class HomeComponent {
    intro = 'A Software Engineer specializing in full-stack development with Java, Spring Boot, and Angular.' +
        ' Currently working as a Workday Integration and Extend Developer at Capgemini, I build scalable enterprise solutions and ' +
        'design seamless system integrations. I\'m passionate about crafting efficient APIs, developing' +
        ' production-ready applications, and solving complex technical challenges. Explore my projects to see how' +
        ' I turn ideas into impactful software solutions.'
    skills = ['Java', 'Spring Boot','Secure RESTful API Design', 'AngularJS', 'SQL', 'NoSQL', 'Git', 'Docker', 'AWS', 'Workday'];

    viewResume() {
        const cvUrl = 'assets/resume/resume1.pdf';
        window.open(cvUrl, '_blank');
    }

     downloadResume() {
        const eleRef = document.createElement('a');
        eleRef.href = 'assets/resume/resume1.pdf';
        eleRef.download = 'Tridip Mandal Resume.pdf';
        eleRef.click();
    }
}
