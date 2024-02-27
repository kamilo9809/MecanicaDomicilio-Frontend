import { Component } from '@angular/core';

import { GeneralHeaderComponent } from './../componentes-generales/general-header/general-header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [GeneralHeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
 