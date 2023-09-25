import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RecetasComponent } from './recetas/recetas.component';
import { TerminosComponent } from './terminos/terminos.component';


@NgModule({
  declarations: [
    ContactoComponent,
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    ContactoComponent,
    FavoritosComponent,
    RecetasComponent,
    TerminosComponent
  ]
})
export class PagesModule { }
