import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ heroBars3 })],
})
export class NavbarComponent {}
