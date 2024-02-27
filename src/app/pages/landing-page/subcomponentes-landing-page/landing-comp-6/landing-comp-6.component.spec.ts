import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComp6Component } from './landing-comp-6.component';

describe('LandingComp6Component', () => {
  let component: LandingComp6Component;
  let fixture: ComponentFixture<LandingComp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingComp6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingComp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
