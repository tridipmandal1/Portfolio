import {Component, inject, signal} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    themeService = inject(ThemeService);
    isMenuOpen = signal(false);

    navLinks = [
        { path: '/home', label: 'Home' },
        { path: '/education', label: 'Education' },
        { path: '/projects', label: 'Projects' },
        { path: '/experience', label: 'Experience' },
    ];

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleMenu() {
        this.isMenuOpen.update(open => !open);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
