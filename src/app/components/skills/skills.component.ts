import { Component } from '@angular/core';
import { FadeInDirective } from '../../fade-in.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FadeInDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
