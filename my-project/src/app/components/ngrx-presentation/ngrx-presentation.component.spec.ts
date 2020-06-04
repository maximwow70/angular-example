import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPresentationComponent } from './ngrx-presentation.component';

describe('NgrxPresentationComponent', () => {
  let component: NgrxPresentationComponent;
  let fixture: ComponentFixture<NgrxPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
