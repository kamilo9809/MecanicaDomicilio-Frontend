import { Component } from '@angular/core';

import { GeneralHeaderComponent } from './../componentes-generales/general-header/general-header.component';
import { LandingComp1Component } from './subcomponentes-landing-page/landing-comp-1/landing-comp-1.component';
import { SliderMarcasComponent } from './../componentes-generales/slider-marcas/slider-marcas.component';
import { LandingComp2Component } from './subcomponentes-landing-page/landing-comp-2/landing-comp-2.component';
import { LandingComp3Component } from './subcomponentes-landing-page/landing-comp-3/landing-comp-3.component';
import { LandingComp4Component } from './subcomponentes-landing-page/landing-comp-4/landing-comp-4.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    GeneralHeaderComponent, 
    LandingComp1Component, 
    SliderMarcasComponent, 
    LandingComp2Component,
    LandingComp3Component,
    LandingComp4Component
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
 