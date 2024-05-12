import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBars3, heroXMark } from '@ng-icons/heroicons/outline';
import { ClickStopPropagationDirective } from '../../click-stop-propagation.directive';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIconComponent,
    CommonModule,
    ClickStopPropagationDirective,
    LanguageSelectorComponent,
    TranslocoModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  viewProviders: [provideIcons({ heroBars3, heroXMark })],
})
export class NavbarComponent {
  showNavigation: boolean = true;

  showNav() {
    this.showNavigation = !this.showNavigation;
  }
}
