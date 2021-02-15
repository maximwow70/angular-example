import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPresentationComponent } from './pipes-presentation.component';

describe('PipesPresentationComponent', () => {
  let component: PipesPresentationComponent;
  let fixture: ComponentFixture<PipesPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
