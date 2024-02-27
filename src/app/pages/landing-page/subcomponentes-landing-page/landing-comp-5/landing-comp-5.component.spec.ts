import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp5Component } from './landing-comp-5.component';

describe('LandingComp5Component', () => {
  let component: LandingComp5Component;
  let fixture: ComponentFixture<LandingComp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
