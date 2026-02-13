import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'class': 'page-enter-active'
    }
})
export class ContactComponent {

    private alertService = inject(AlertService);
    contactForm: FormGroup;

    copiedHandle = signal<string | null>(null);

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    copyToClipboard(handle: string, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        navigator.clipboard.writeText(handle).then(() => {
            this.copiedHandle.set(handle);
            setTimeout(() => {
                if (this.copiedHandle() === handle) {
                    this.copiedHandle.set(null);
                }
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy handle: ', err);
        });
    }

    onSubmit() {
        if (this.contactForm.invalid) {
            this.alertService.showError("Please fill out all required fields correctly.");
            return;
        }

        const formData = new FormData();
        formData.append("form-name", "contact");

        const formValue = this.contactForm.value;
        Object.keys(formValue).forEach(key => {
            const controlName = key as keyof typeof formValue;
            const value = formValue[controlName];
            if (value) {
                formData.append(key, value);
            }
        });
        fetch("/", {
            method: "POST",
            body: formData
        })
            .then(() => {
                this.alertService.showSuccess("Message sent successfully! I'll get back to you soon.");
                this.contactForm.reset();
            })
            .catch(error => {
                this.alertService.showError("Sorry, there was an error sending your message. Please try again later.");
                console.error('Form submission error:', error);
            });
    }


    socials = [
        {
            name: 'Email',
            handle: 'tridip.officials@gmail.com',
            url: 'mailto:tridip.officials@gmail.com',
        },
        {
            name: 'LinkedIn',
            handle: 'tridip-mandal',
            url: 'https://www.linkedin.com/in/tridip-mandal-55856a227/',
        },
        {
            name: 'GitHub',
            handle: 'tridipmandal1',
            url: 'https://github.com/tridipmandal1',
        },
        {
            name: 'Medium',
            handle: '@tridipmandal16',
            url: 'https://medium.com/@tridipmandal16',
        },
        {
            name: 'LeetCode',
            handle: 'tridipquanta7',
            url: 'https://leetcode.com/u/tridipquanta7/',
        }
    ];


}
