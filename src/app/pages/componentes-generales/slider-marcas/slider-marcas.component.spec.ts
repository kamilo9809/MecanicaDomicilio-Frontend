import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMarcasComponent } from './slider-marcas.component';

describe('SliderMarcasComponent', () => {
  let component: SliderMarcasComponent;
  let fixture: ComponentFixture<SliderMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
