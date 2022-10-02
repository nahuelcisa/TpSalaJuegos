import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'quiensoy', component: QuienSoyComponent, canActivate: [GuardGuard] },
  { path: 'registro', component: RegisterComponent },
  {path: 'chat', component: ChatComponent , canActivate: [GuardGuard]},
  {path:'resultados', component:ResultadosComponent, canActivate: [GuardGuard]},
  {path:'encuesta', component:EncuestaComponent},
  { path: 'salaJuegos', loadChildren: () => import('./sala-juegos/sala-juegos.module').then(m => m.SalaJuegosModule)  , canActivate: [GuardGuard] },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
