import { Component } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { AboutComponent } from '../components/about/about.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
