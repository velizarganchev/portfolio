import { Component } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

import fakeProjects from '../../../fake-data/fake-data';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../fade-in.directive';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent, CommonModule, TranslocoModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects;

  constructor() {
    this.projects = fakeProjects;
  }
}
