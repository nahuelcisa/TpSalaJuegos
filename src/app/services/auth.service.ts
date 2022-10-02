import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../clases/usuario';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from './firestore.service';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logueado : Usuario = new  Usuario();

  auth : any;

  log : Usuario = {};

  constructor(public router : Router,private toastr: ToastrService, private fs : FirestoreService) { 
    this.logueado.correo = undefined;
    this.logueado.clave = undefined;
    this.auth = getAuth();
  }

  registro(usuario : any)
  {
    createUserWithEmailAndPassword(this.auth, usuario.correo, usuario.clave).then((userCredential)=>{
      this.logueado = usuario;
      this.toastr.success('USUARIO REGISTRADO!', 'Disfruta!');
      this.router.navigate(['/home']);
    });
    
  }

  login(email : string, password : string)
  {
    signInWithEmailAndPassword(this.auth,email,password).then(() =>
    {
        this.logueado.correo = email;
        this.logueado.clave = password;

        let date : Date = new Date();

        this.log.usuario = this.logueado;
        this.log.fIngreso = date;

        let usuario : Usuario = {
          usuario : this.log.usuario.correo,
          fIngreso : date
        }

        this.router.navigate(['/home']);
        this.fs.agregarLog(usuario);
    
    }).catch(response =>{
      
      if(response.code == 'auth/user-not-found')
      {
        this.toastr.error('Usuario no encontrado');
      }
      else{
        if(response.code == 'auth/wrong-password' || response.code == 'auth/wrong-email')
        {
          this.toastr.error('La contraseña o el email son incorrectos');
        }
        else{
          if(response.code == 'auth/missing-email' || response.code == 'auth/missing-password')
          {
          this.toastr.error('No puede haber ningún campo vacío');
          }
          else
          {
            if(response.code == 'auth/invalid-email' || response.code == 'auth/invalid-password')
            {
              this.toastr.error('La contraseña o el email son incorrectos');
            }
          }
        }
      }
    })
  }

  logout(){
    signOut(this.auth);
    this.logueado.correo = undefined;
    this.logueado.clave = undefined;
    this.router.navigateByUrl('/login');
  }

}
