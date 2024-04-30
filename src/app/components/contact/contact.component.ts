import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowSmallUp } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ heroArrowSmallUp })],
})

export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid && contactForm.submitted) {
      console.log(this.contactData);
    }
  }
}
