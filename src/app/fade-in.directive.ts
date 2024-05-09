import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit {

  @Input() thresholdMax = 0.8;
  @Input() thresholdMin = 0.4;
  @Output() isVisible = new EventEmitter<string>();

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.createObserver();
  }

  addClassName(className: any) {
    this.renderer.addClass(this.element.nativeElement, className);
    this.isVisible.emit();
  }

  removeClassName(className: any) {
    if (this.element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(this.element.nativeElement, className);
    }
  }

  createObserver() {
    const options = {
      threshold: [this.thresholdMin, this.thresholdMax],
    };

    const callback = (entries: any) => {
      entries &&
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            this.addClassName('visible');
          } else {
            this.removeClassName('visible');
          }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = this.element.nativeElement;
    target && observer.observe(target);
  }
}
