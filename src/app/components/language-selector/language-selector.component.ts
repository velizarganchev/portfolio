import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {

  currentLanguageIndex: number = 0;

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.changeLanguage('en', 0)
  }

  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>
  > = [
      {
        imgUrl: '../../../assets/img/usa-flagge.svg',
        code: 'en',
        name: 'English',
        shorthand: 'ENG',
      },
      {
        imgUrl: '../../../assets/img/germany-flagge.svg',
        code: 'de',
        name: 'German',
        shorthand: 'GER',
      },
    ];

  public changeLanguage(languageCode: string, index: number): void {
    this.translocoService.setActiveLang(languageCode);
    this.currentLanguageIndex = index === 0 ? 1 : 0;
  }
}
