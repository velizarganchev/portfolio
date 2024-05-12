import { Component } from '@angular/core';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

import projects from '../../../data/data';
import { CommonModule } from '@angular/common';
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
    this.projects = projects;
  }
}
