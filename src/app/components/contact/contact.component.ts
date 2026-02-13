import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

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

    copiedHandle = signal<string | null>(null);

    constructor(private fb: FormBuilder) {}

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

    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required]
    });

    onSubmit() {
        if (this.contactForm.invalid) return;

        const formData = new FormData();
        formData.append("form-name", "contact");

        Object.keys(this.contactForm.value).forEach(key=> {
            // @ts-ignore
            formData.append(key, this.contactForm.value[key]);
        });

        fetch("/", {
            method: "POST",
            body: formData
        })
            .then(() => alert("Message sent successfully!"))
            .catch(error => alert("Error sending message"));
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
            handle: 'Tridip Mandal',
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
