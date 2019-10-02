import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string;
  // };  @Input('serverData') element: {
  //   type: string;
  //   name: string;
  //   content: string;
  // };

  constructor() {
    styledLog('constructor called', 'blue');
  }

  ngOnChanges(changes: SimpleChanges) {
    styledLog('ngOnChanges called', 'gray');
    console.log('simple changes:', changes);
  }

  ngOnInit() {
    styledLog('ngOnInit called', 'green');
  }

  ngDoCheck() {
    styledLog('ngDoCheck called', 'orange');
  }

  ngAfterContentInit() {
    styledLog('ngAfterContentInit called', 'purple');
  }

  ngAfterContentChecked() {
    styledLog('ngAfterContentInit called', 'teal');
  }

  ngAfterViewInit() {
    styledLog('ngAfterViewInit called', 'orange');
  }
  ngAfterViewChecked() {
    styledLog('ngAfterViewChecked called', 'pink');
  }

  ngOnDestroy() {
    styledLog('ngOnDestroy called', 'red');
  }
}

const styledLog = (text: string, color: string): void => {
  console.log(`%c${text}`, `color: ${color}; font-size: 120%;`);
};
