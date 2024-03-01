import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})

export class CardImageComponent {
  @Input() imagenes: any[] = [];
  @Input() showAllImages: boolean = false;
  imagenGrande: { url: string } = { url: '' };
  imagenIndex: number = 0;

  constructor() {
    this.imagenGrande.url = '';
  }

  verImagenGrande(imagenUrl: string) {
    // Asigna la URL de la imagen al objeto imagenGrande
    this.imagenGrande.url = imagenUrl;
    console.log("Datos de la imagen grande:", this.imagenGrande);
    // Muestra el modal
    const modal = document.getElementById("modal-imagen");
    if (modal) {
      modal.classList.add("is-visible");
      modal.classList.remove("not-visible");
    }
    // Obtén el índice de la imagen actual
    this.imagenIndex = this.imagenes.findIndex(imagen => imagen.url === imagenUrl);
  }

  cerrarModal() {
    // Oculta el modal
    const modal = document.getElementById("modal-imagen");
    if (modal) {
      modal.classList.add("not-visible");
      modal.classList.remove("is-visible");
    }
  }

  verImagenAnterior() {
    this.imagenIndex = (this.imagenIndex - 1 + this.imagenes.length) % this.imagenes.length;
    this.imagenGrande.url = this.imagenes[this.imagenIndex].url;
  }

  verImagenSiguiente() {
    this.imagenIndex = (this.imagenIndex + 1) % this.imagenes.length;
    this.imagenGrande.url = this.imagenes[this.imagenIndex].url;
  }

  startX: number = 0;
  endX: number = 0;
  threshold: number = 50; // Umbral de deslizamiento

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.endX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const deltaX = this.endX - this.startX;
    if (Math.abs(deltaX) > this.threshold) {
      if (deltaX > 0) {
        this.verImagenAnterior();
      } else {
        this.verImagenSiguiente();
      }
    }
    // Reinicia los valores
    this.startX = 0;
    this.endX = 0;
  }
}