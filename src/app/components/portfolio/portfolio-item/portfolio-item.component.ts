import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})
export class PortfolioItemComponent {
  @Input('srProject') project!: {
    title: string;
    imgPath: string;
    technologys: string[];
    description: string;
    links: string[];
    api_link?: string;
  };

  @Input('srIndex') index!: number;

  constructor() {}
}
