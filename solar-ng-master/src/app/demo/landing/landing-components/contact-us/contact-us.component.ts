import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  formData: any = {}; // Object to store form data

  constructor() { }

  onSubmit(form: any): void {
    if (form.valid) {
        console.log('Form Data:', this.formData);
    }
}
}
