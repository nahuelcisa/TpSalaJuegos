import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaJuegosComponent } from './sala-juegos.component';

const routes: Routes = [{ path: '', component: SalaJuegosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaJuegosRoutingModule { }
