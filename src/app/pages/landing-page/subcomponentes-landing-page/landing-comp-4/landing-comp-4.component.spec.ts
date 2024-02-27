import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp4Component } from './landing-comp-4.component';

describe('LandingComp4Component', () => {
  let component: LandingComp4Component;
  let fixture: ComponentFixture<LandingComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
