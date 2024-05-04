import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  scrolling: boolean = false;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if (!this.scrolling) {
        this.scrolling = true;
        setTimeout(() => {
          this.checkScroll();
          this.scrolling = false;
        }, 200); // Verzögerung von 200 Millisekunden
      }
    });
  }

  checkScroll(): void {
    const element = this.aboutSection.nativeElement;
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

    if (isVisible) {
      element.classList.add('about-visible');
    } else {
      element.classList.remove('about-visible');
    }
  }
}
