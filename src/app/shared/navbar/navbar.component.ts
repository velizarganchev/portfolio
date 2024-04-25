import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ heroBars3, heroXMark })],
})
export class NavbarComponent {
  showNavigation: boolean = true;

  showNav() {
    console.log(this.showNavigation);
    
    this.showNavigation = !this.showNavigation;


  }
}
