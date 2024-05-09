import { Component, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { FadeInDirective } from '../../fade-in.directive';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FadeInDirective, TranslocoModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent { }
