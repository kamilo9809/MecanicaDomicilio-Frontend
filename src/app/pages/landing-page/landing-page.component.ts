import { Component } from '@angular/core';

import { GeneralHeaderComponent } from './../componentes-generales/general-header/general-header.component';
import { SliderMarcasComponent } from './../componentes-generales/slider-marcas/slider-marcas.component';
import { GeneralFooterComponent } from './../componentes-generales/general-footer/general-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [GeneralHeaderComponent, GeneralFooterComponent, SliderMarcasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
 