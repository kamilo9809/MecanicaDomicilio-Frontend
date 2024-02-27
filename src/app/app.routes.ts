import { Routes } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ComerceComponent } from './pages/comerce/comerce.component';
import { ProductoIndividualComponent } from './pages/comerce/producto-individual/producto-individual.component';
import { CarritoComponent } from './pages/comerce/carrito/carrito.component';
import { FacturaCompraComponent } from './pages/comerce/factura-compra/factura-compra.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, //rendiriza unicamente el landing page
  { 
    path: 'ecommerce',  //renderiza todo lo relacionado al ecommerce
    children: [
      { path: '', component: ComerceComponent }, 
      { path: 'producto-individual', component: ProductoIndividualComponent },
      { path: 'carrito', component: CarritoComponent },
      { path: 'factura-compra', component: FacturaCompraComponent }
    ]
  }
];
