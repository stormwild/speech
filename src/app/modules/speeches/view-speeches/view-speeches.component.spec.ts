import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeechesComponent } from './view-speeches.component';

describe('ViewSpeechesComponent', () => {
  let component: ViewSpeechesComponent;
  let fixture: ComponentFixture<ViewSpeechesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpeechesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpeechesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
