import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComerceComponent } from './comerce.component';

describe('ComerceComponent', () => {
  let component: ComerceComponent;
  let fixture: ComponentFixture<ComerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComerceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
