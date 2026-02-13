import {effect, Inject, Injectable, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

    isBrowser = isPlatformBrowser(this.platformId);
    isDark = signal<boolean>(this.getInitialTheme());

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        effect(() => {
            if (this.isBrowser) {
                if (this.isDark()) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }
            }
        });
    }

    private getInitialTheme(): boolean {
        if (!this.isBrowser) {
            return true; // Default to dark on server
        }
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        // Default to dark theme as per the designs provided
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true;
    }

    toggleTheme(): void {
        this.isDark.update(value => !value);
    }
}
