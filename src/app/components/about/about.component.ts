import { Component, ElementRef, ViewChild } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ FadeInDirective, TranslocoModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
