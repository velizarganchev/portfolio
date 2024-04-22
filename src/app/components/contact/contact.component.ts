import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowSmallUp } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  viewProviders: [provideIcons({ heroArrowSmallUp })],
})
export class ContactComponent {}
