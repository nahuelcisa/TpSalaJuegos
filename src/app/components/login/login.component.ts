import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email : string = '';
  clave : string = '';

  constructor(public as: AuthService, ) { 

    
  }


  ngOnInit(): void {
  }
  
  iniciarSesion(){
    this.as.login(this.email,this.clave);
  }

  llenarCredenciales(){
    this.email = 'nahuelcisa17@gmail.com';
    this.clave = '123456';
  }
}
