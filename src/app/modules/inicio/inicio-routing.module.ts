import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './cards/cards.component';
import { RecetasComponent } from 'src/app/pages/recetas/recetas.component';
import { DesayunosComponent } from 'src/app/pages/recetas/desayunos/desayunos.component';
import { AlmuerzosComponent } from 'src/app/pages/recetas/almuerzos/almuerzos.component';
import { MeriendasComponent } from 'src/app/pages/recetas/meriendas/meriendas.component';
import { CenasComponent } from 'src/app/pages/recetas/cenas/cenas.component';
//Agregamos las rutas de inicio
const routes: Routes = [
  {path: "cards", component : CardsComponent},
  {path:'inicio', component : InicioComponent},
  {path:'recetas', component : RecetasComponent},
  {path:'desayunos', component : DesayunosComponent},
  {path:'almuerzos', component : AlmuerzosComponent},
  {path:'meriendas', component : MeriendasComponent},
  {path:'cenas', component : CenasComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
