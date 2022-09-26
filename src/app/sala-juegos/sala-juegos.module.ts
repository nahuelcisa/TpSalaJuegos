import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaJuegosRoutingModule } from './sala-juegos-routing.module';
import { SalaJuegosComponent } from './sala-juegos.component';


@NgModule({
  declarations: [
    SalaJuegosComponent
  ],
  imports: [
    CommonModule,
    SalaJuegosRoutingModule
  ]
})
export class SalaJuegosModule { }
