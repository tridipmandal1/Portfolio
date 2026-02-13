import { Injectable, signal } from '@angular/core';

export interface Alert {
    message: string;
    type: 'success' | 'error';
}

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    alertState = signal<Alert | null>(null);
    private timer: any;

    private show(message: string, type: 'success' | 'error' = 'success') {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.alertState.set({ message, type });
        this.timer = setTimeout(() => {
            this.clear();
        }, 5000);
    }

    showSuccess(message: string) {
        this.show(message, 'success');
    }

    showError(message: string) {
        this.show(message, 'error');
    }

    clear() {
        this.alertState.set(null);
    }
}
