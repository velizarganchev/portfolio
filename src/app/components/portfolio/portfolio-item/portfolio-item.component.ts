import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FadeInDirective } from '../../../fade-in.directive';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
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
  };

  @Input('srIndex') index!: number;

  constructor() {}
}
