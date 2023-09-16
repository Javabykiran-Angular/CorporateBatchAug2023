import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tast1Component } from './tast1.component';

describe('Tast1Component', () => {
  let component: Tast1Component;
  let fixture: ComponentFixture<Tast1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tast1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
