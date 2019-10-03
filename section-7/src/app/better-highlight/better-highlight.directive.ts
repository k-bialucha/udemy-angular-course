import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  // fancy example
  // @HostListener('mousemove') mouseover(eventData: Event): void {
  //   const greenLevel = Math.floor(
  //     (160 * event.clientX) / document.documentElement.clientWidth
  //   );
  //   const color = `rgb(50, ${95 + greenLevel}, 90)`;

  //   this.backgroundColor = color;
  // }
  @HostListener('mouseenter') mouseover(eventData: Event): void {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    this.backgroundColor = this.defaultColor;
    // );
  }
}
