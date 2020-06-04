import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNotFoundComponent } from './super-not-found.component';

describe('SuperNotFoundComponent', () => {
  let component: SuperNotFoundComponent;
  let fixture: ComponentFixture<SuperNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
