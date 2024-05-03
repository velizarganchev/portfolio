import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';
import { ClickStopPropagationDirective } from '../../click-stop-propagation.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIconComponent, CommonModule, ClickStopPropagationDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ heroBars3, heroXMark })],
})
export class NavbarComponent {
  showNavigation: boolean = true;

  showNav() {
    console.log('CLICKED');
    
    this.showNavigation = !this.showNavigation;
  }
}
