import { Component } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

import fakeProjects from '../../../fake-data/fake-data';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../fade-in.directive';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioItemComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  projects;

  constructor() {
    this.projects = fakeProjects;
  }
}
