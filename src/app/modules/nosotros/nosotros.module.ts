import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule
  ],
  exports: [
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
