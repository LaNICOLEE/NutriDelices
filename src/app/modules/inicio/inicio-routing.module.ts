import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './cards/cards.component';
import { RecetasComponent } from 'src/app/pages/recetas/recetas.component';
//Agregamos las rutas de inicio
const routes: Routes = [
  {path: "cards", component : CardsComponent},
  {path:'inicio', component : InicioComponent},
  {path:'recetas', component : RecetasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
