import { Component } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FadeInDirective, TranslocoModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
