import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-general-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-header.component.html',
  styleUrl: './general-header.component.css'
})
export class GeneralHeaderComponent {
    isNavegacionOpen: boolean = false;

    constructor(){}

    toggleNavegacion():void {
      this.isNavegacionOpen = !this.isNavegacionOpen;
    }
}
