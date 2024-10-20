import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowSmallUp } from '@ng-icons/heroicons/outline';
import { HttpClient } from '@angular/common/http';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgIconComponent,
    RouterLink,
    FormsModule,
    CommonModule,
    TranslocoModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ heroArrowSmallUp })],
})
export class ContactComponent {
  mailTest = false;
  showSuccessMessage = false;
  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: '',
  };

  constructor(private http: HttpClient) {}

  post = {
    endPoint: 'https://velizar-ganchev.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.showSuccessMessage = true;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 2000);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }
}
