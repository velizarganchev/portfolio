import { Component, ElementRef, ViewChild } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FadeInDirective, TranslocoModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  
}
