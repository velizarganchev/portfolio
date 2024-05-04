import { Component, ElementRef, ViewChild } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  
}
