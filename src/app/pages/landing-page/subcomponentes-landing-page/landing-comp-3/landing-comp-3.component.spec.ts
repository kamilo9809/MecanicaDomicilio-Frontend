import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp3Component } from './landing-comp-3.component';

describe('LandingComp3Component', () => {
  let component: LandingComp3Component;
  let fixture: ComponentFixture<LandingComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
