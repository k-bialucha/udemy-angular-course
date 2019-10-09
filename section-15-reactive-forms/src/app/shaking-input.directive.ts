import { Directive, HostBinding, HostListener } from '@angular/core';

import debounce from './debounce';

@Directive({
  selector: '[appShakingInput]',
})
export class ShakingInputDirective {
  @HostBinding('class.Input--shaking') isShaking: boolean = false;

  @HostListener('keydown', ['$event.target']) onKeyDown() {
    this.isShaking = true;

    this.handleTurnOff();
  }

  handleTurnOff = debounce(() => {
    this.isShaking = false;
  }, 300);
}
