import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public as: AuthService) { }

  email! : string;
  clave! : string;

  ngOnInit(): void {
  }
  
  iniciarSesion(){
    this.as.login(this.email,this.clave);
  }
}
