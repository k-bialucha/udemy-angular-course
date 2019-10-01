import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalContentExampleComponent } from './conditional-content-example.component';

describe('ConditionalContentExampleComponent', () => {
  let component: ConditionalContentExampleComponent;
  let fixture: ComponentFixture<ConditionalContentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalContentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
