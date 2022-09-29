import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  letras : any; 
  
  palabras : any = ["ELEFANTE","DOCTOR","PROGRAMACION"];
 
  palabraEnProceso : string = "";
  palabraAAdivinar : string = "";
  fallos : number;
  acertadas : number;
  disabled : boolean = false;

  constructor(private toast : ToastrService) { 
    this.letras = ["A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","Ñ","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"];
    this.fallos = 0;
    this.acertadas = 0;

    this.inicializarPalabra();
  }

  ngOnInit(): void {
  }

  reiniciar()
  {
    this.fallos = 0;
    this.palabraAAdivinar = "";
    this.palabraEnProceso = "";
    this.acertadas = 0;
    this.disabled = false;
    this.inicializarPalabra();
  }

  inicializarPalabra()
  {
    let random : number = Math.floor(Math.random() * this.palabras.length);
    this.palabraAAdivinar = this.palabras[random];

    this.generarEspacios();
    
  }

  generarEspacios()
  {
    for(let i = 0;i < this.palabraAAdivinar.length; i++)
    {
      this.palabraEnProceso += "_";
    }
  }

  clicked(letra : string)
  {
     if(!this.busqueda(letra))
     {
       this.fallos++;
        if(this.fallos == 6)
        {
          this.juegoPerdido();
        }  
     }
     else
     {
       if(this.acertadas === this.palabraAAdivinar.length)
       {
         this.juegoGanado();
       }
     }

     
  }

  busqueda(letra : string) : boolean
  {
    let letraAcertada : boolean = false;
    for(let i = 0; i < this.palabraAAdivinar.length; i++)
    {
      if(this.palabraAAdivinar[i] === letra)
      {
        letraAcertada = true;
        this.palabraEnProceso = this.palabraEnProceso.substring(0,i) + letra + this.palabraEnProceso.substring(i + 1);
        this.acertadas++;
      }
    }

    return letraAcertada;
  }

  juegoPerdido()
  {
    this.toast.error("Has alcanzado el limite de fallos","Has perdido");
    this.disabled = true;
    setTimeout(() => {
      this.reiniciar();
    }, 2200);
  }

  juegoGanado()
  {
    this.toast.success("Has adivinado la palabra","Has ganado");
    this.disabled = true;
    setTimeout(() => {
      this.reiniciar();
    }, 2200);
  }
}
