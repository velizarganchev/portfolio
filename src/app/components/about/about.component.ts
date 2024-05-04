import { Component, ElementRef, ViewChild } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ FadeInDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
