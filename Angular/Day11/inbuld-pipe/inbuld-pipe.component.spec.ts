import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuldPipeComponent } from './inbuld-pipe.component';

describe('InbuldPipeComponent', () => {
  let component: InbuldPipeComponent;
  let fixture: ComponentFixture<InbuldPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuldPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuldPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
