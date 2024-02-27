import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ComerceComponent } from './pages/comerce/comerce.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent, ComerceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mecanica';
}
