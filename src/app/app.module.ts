import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AhorcadoComponent } from './components/Juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './components/Juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './components/Juegos/preguntados/preguntados.component';
import { CalculoExactoComponent } from './components/Juegos/calculo-exacto/calculo-exacto.component';
import { ChatComponent } from './components/chat/chat.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegisterComponent,
    NavComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    CalculoExactoComponent,
    ChatComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    provideMessaging(() => getMessaging()),
    provideFirebaseApp( () => initializeApp(environment.firebase)),   
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
