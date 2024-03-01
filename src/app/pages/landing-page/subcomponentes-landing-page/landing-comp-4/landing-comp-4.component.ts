import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardImageComponent } from './card-image/card-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-comp-4',
  standalone: true,
  imports: [CardImageComponent, CommonModule],
  templateUrl: './landing-comp-4.component.html',
  styleUrl: './landing-comp-4.component.css'
})
export class LandingComp4Component implements OnInit {
  imagenes: any[] = [];
  apiKey = '40254485-f5b9db31f36a41872aa317d79'; // Reemplaza con tu clave de API

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerImagenes();
  }

  obtenerImagenes() {
    const url = `https://pixabay.com/api/?key=${this.apiKey}&per_page=50`; // Puedes ajustar el número de imágenes que deseas obtener
    this.http.get<any>(url).subscribe((response) => {
      this.imagenes = response.hits.map((hit: any) => {
        return { 
          url: hit.webformatURL,
          sizes: '(max-width: 768px) 100vw, 50vw'
        };
      });
    });
  }

  showAllImages = false;

  get imagenesToShow() {
    return this.showAllImages ? this.imagenes : this.imagenes.slice(0, 9);
  }

}
