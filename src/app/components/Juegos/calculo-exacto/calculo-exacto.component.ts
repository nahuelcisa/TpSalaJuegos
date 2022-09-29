import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-calculo-exacto',
  templateUrl: './calculo-exacto.component.html',
  styleUrls: ['./calculo-exacto.component.scss']
})
export class CalculoExactoComponent implements OnInit {

  numeros : Array<number> = [];
  aAproximarse : number = 0;  
  operandos : Array<number> = [];
  numeroActual : number = 0;
  operaciones : number = 7;
  operando : number = 0;
  disabled : boolean = false;
  disabledOperador : boolean = true;
  puntaje : number = 0;

  constructor(private toast : ToastrService) {
    this.numeros = [1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,
                    19,20];
    
    this.inicializar();
   }

   inicializar()
  {
    this.operaciones = 7;
    this.disabledOperador = true;
    this.disabled = false;
    this.numeroActual = 0;
    this.aAproximarse = Math.floor(Math.random() * (501 - 100)) + 100;
    
    let random : number = 0;

    for (let i = 0; i < 6; i++) { 
      random = Math.floor(Math.random() * this.numeros.length);
      this.operandos.push(this.numeros[random]);
      this.numeros = this.numeros.filter((numero : number) => numero != this.numeros[random]);
          
    }
  }

  asignarOperando(numero : number)
  {
    this.operando = numero;
    this.disabled = true;
    this.disabledOperador = false;
  }

  asignaciones()
  {
    this.operando = 0;
    this.disabled = false;
    this.operaciones--;
    this.disabledOperador = true;

    if(this.operaciones == 0)
    {
      this.analisis();
    }
  }

  operar(operador : string)
  {
    switch(operador)
    {
        case '+':
          this.numeroActual = Math.floor(this.numeroActual + this.operando);
          this.asignaciones();
          break;
        case '-':
          this.numeroActual = Math.floor(this.numeroActual - this.operando);
          this.asignaciones();
          break;
        case '*':
          this.numeroActual = Math.floor(this.numeroActual * this.operando);
          this.asignaciones();
          break;
        case '/':
          this.numeroActual = Math.floor(this.numeroActual / this.operando);
          this.asignaciones();
          break;
    }
  }

  analisis()
  {
    let resultado : number = this.aAproximarse - this.numeroActual;

    if(resultado == 0)
    {
      this.puntaje = 10;
      this.toast.success("Has igualado el numero, tu puntaje es: " + this.puntaje,"Te haz aproximado");
    }
    else
    {
      if(this.numeroActual > this.aAproximarse)
      {
        this.puntaje = 0;
        this.toast.error("Te haz pasado, tu puntaje es: " + this.puntaje,"No te haz aproximado");
      }
      else
      {
        if(resultado <= 20 && resultado > 10)
        {
          this.puntaje = 7;
          this.toast.warning("Te haz aproximado, tu puntaje es: " + this.puntaje,"Te haz aproximado");
        }
        else
        {
          if(resultado <= 10 && resultado > 5)
          {
            this.puntaje = 8;
            this.toast.warning("Te haz aproximado, tu puntaje es: " + this.puntaje,"Te haz aproximado");
          }
          else
          {
            if(resultado <= 5)
            {
              this.puntaje = 9;
              this.toast.warning("Te haz aproximado, tu puntaje es: " + this.puntaje,"Te haz aproximado");
            }
            else
            {
              if(resultado > 20)
              {
                this.puntaje = 0;
                this.toast.error("Te haz quedado en el camino, tu puntaje es: " + this.puntaje,"No te haz aproximado");
              }
            }
          }
        }
      }
    }
    this.disabledOperador = true;
    this.disabled = true;
    setTimeout(() => {
      this.numeros = [1,2,3,4,5,6,7,8,9,10,
                      11,12,13,14,15,16,17,18,
                      19,20];
      this.operandos = [];
      this.inicializar();
    }, 2000);
  }

  ngOnInit(): void {
  }

}
