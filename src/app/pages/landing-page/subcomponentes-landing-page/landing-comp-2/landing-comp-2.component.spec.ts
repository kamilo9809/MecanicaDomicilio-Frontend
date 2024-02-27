import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp2Component } from './landing-comp-2.component';

describe('LandingComp2Component', () => {
  let component: LandingComp2Component;
  let fixture: ComponentFixture<LandingComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
