import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegisterComponent } from './components/register/register.component';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'quiensoy', component: QuienSoyComponent, canActivate: [GuardGuard] },
  { path: 'registro', component: RegisterComponent },
  { path: 'error', component: ErrorComponent },
  {path: 'chat', component: ChatComponent , canActivate: [GuardGuard]},
  { path: 'SalaJuegos', loadChildren: () => import('./sala-juegos/sala-juegos.module').then(m => m.SalaJuegosModule)  , canActivate: [GuardGuard] },
  { path: '**', component: ErrorComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
