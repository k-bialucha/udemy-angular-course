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
  ViewChild,
  ElementRef,
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
  @ViewChild('headingElement', { static: true }) heading: ElementRef;

  constructor() {
    styledLog('constructor called', 'blue');
  }

  ngOnChanges(changes: SimpleChanges) {
    styledLog('ngOnChanges called', 'gray');
    console.log('simple changes:', changes);
  }

  ngOnInit() {
    styledLog('ngOnInit called', 'green');
    console.log(
      `heading content: >>${this.heading.nativeElement.textContent}<<`
    );
  }

  ngDoCheck() {
    styledLog('ngDoCheck called', 'orange');
  }

  ngAfterContentInit() {
    styledLog('ngAfterContentInit called', 'purple');
  }

  ngAfterContentChecked() {
    styledLog('ngAfterContentInit called', 'teal');
    console.log(
      `heading content: >>${this.heading.nativeElement.textContent}<<`
    );
  }

  ngAfterViewInit() {
    styledLog('ngAfterViewInit called', 'orange');
    console.log(
      `heading content: >>${this.heading.nativeElement.textContent}<<`
    );
  }

  ngAfterViewChecked() {
    styledLog('ngAfterViewChecked called', 'pink');
  }

  ngOnDestroy() {
    console.warn('test:', this.heading);
    styledLog('ngOnDestroy called', 'red');
  }
}

const styledLog = (text: string, color: string): void => {
  console.log(`%c${text}`, `color: ${color}; font-size: 120%;`);
};
