import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from '../components/Juegos/ahorcado/ahorcado.component';
import { CalculoExactoComponent } from '../components/Juegos/calculo-exacto/calculo-exacto.component';
import { MayorMenorComponent } from '../components/Juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from '../components/Juegos/preguntados/preguntados.component';
import { SalaJuegosComponent } from './sala-juegos.component';

const routes: Routes = [
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayorMenor', component: MayorMenorComponent },
  { path: 'preguntados', component: PreguntadosComponent },
  { path: 'calculoExacto', component: CalculoExactoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaJuegosRoutingModule { }
