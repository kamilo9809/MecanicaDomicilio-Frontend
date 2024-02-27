import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp1Component } from './landing-comp-1.component';

describe('LandingComp1Component', () => {
  let component: LandingComp1Component;
  let fixture: ComponentFixture<LandingComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
