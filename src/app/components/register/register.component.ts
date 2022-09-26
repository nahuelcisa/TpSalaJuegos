import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private as:AuthService) { }

  email!: string;
  clave! : string;
  clave1! : string;

  ngOnInit(): void {
  }

  registro(){

    let usuario = {
      correo: this.email,
      clave: this.clave
    }
    
    this.as.registro(usuario);
  }


}
