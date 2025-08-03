import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-info-prompt',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './info-prompt.component.html',
  styleUrl: './info-prompt.component.css'
})
export class InfoPromptComponent {

  userForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InfoPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.dialogRef.close({
          result: 'submit',
          data: this.userForm.value
        });
      }, 500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel() {
    this.dialogRef.close({
      result: 'cancel'
    });
  }

  private markFormGroupTouched() {
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.userForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least 2 characters`;
      }
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.userForm.get(fieldName);
    return !!(field?.invalid && field.touched);
  }
}
