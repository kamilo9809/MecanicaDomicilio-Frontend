import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'] // Ensure correct path here
})
export class CardProductComponent {
  calificacionProducto: number = 2; // Set as number (optional)
  precio: number = 720.000;
}
