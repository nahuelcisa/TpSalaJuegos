import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {

  cartas : any;
  cartasRestantes : any;
  cartaInicial : any;
  cartaAComparar : any;
  inicio : boolean = false;
  puntaje : number;

  constructor(public toast : ToastrService, public api : ApiService) { 
    this.puntaje = 0;
    this.cartaInicial = {img:'../../../assets/cartas/0.png',value : 0};
    this.cartaAComparar = {img:'../../../assets/cartas/0.png',value : 0};
    this.inicializarMazo();
  }

  ngOnInit(): void {
  }

  inicializarMazo()
  {
    this.api.setearUrl("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    this.api.apiLlamada().subscribe((dato : any)=>{
      this.cartas = dato.cards;
    });
  }

  inicializarCarta()
  {
    let random : number = Math.floor(Math.random() * this.cartas.length);

    this.administrar(this.cartas[random],this.cartaInicial);

    this.cartasRestantes = this.cartas.filter((carta : any) => carta != this.cartaInicial);

    this.inicio = true;
  }

  generarCarta()
  {
    let random : number = Math.floor(Math.random() * this.cartasRestantes.length);

    this.administrar(this.cartas[random],this.cartaAComparar);
  }

  administrar(dato : any,carta : any,)
  {
    carta.img = dato.image;

    switch(dato.value)
    {
        case "ACE":
          carta.value = 1;
          break;

        case "JACK":
          carta.value = 10;
          break;

        case "QUEEN":
          carta.value = 11;
          break;

        case "KING":
          carta.value = 12; 
          break;

        default:
          carta.value = parseInt(dato.value);
          break; 
    }
  }

  reemplzarCarta()
  {
    this.cartasRestantes = this.cartas.filter((carta : any) => carta != this.cartaAComparar);
    setTimeout(() => {
      this.cartaInicial.img = this.cartaAComparar.img;
      this.cartaInicial.value = this.cartaInicial.value;
      this.cartaAComparar.img = "../../../assets/cartas/0.png";
      this.cartaAComparar.value = 0;
    }, 1000);
  }

  juegoPerdido(mensaje : string)
  {
    this.toast.error(mensaje,"Has perdido");
  }

  reiniciar()
  {
    this.cartaInicial.img = "../../../assets/cartas/0.png";
    this.cartaInicial.value = 0;
    this.cartaAComparar.img = "../../../assets/cartas/0.png";
    this.cartaAComparar.value = 0;
    this.puntaje = 0;
    this.inicio = false;  
  }

  comparar(condicion : number)
  {
    this.generarCarta();

    switch(condicion)
    {
      case 1:
        if(this.cartaAComparar.value > this.cartaInicial.value)
        {
          this.puntaje++;
          this.reemplzarCarta();
        }
        else
        {
          if(this.cartaAComparar.value == this.cartaInicial.value)
          {
            this.toast.warning("Empate","Igual");
            setTimeout(() => {
              this.cartaAComparar.img = "../../../assets/cartas/0.png";
              this.cartaAComparar.value = 0;     
            }, 2500);
          }
          else
          {
            this.juegoPerdido("Era menor, su puntaje ha sido de " + this.puntaje + " puntos");
            setTimeout(() => {
              this.reiniciar();
            }, 2500);       
          }
        }
        break;

        case 2:
          if(this.cartaAComparar.value < this.cartaInicial.value)
          {
            this.puntaje++;
            this.reemplzarCarta();
          }
          else
          {
            if(this.cartaAComparar.value == this.cartaInicial.value)
            {
              this.toast.warning("Empate","Igual");
              setTimeout(() => {
                this.cartaAComparar.img = "../../../assets/cartas/0.png";
                this.cartaAComparar.value = 0;     
              }, 2500);
            }
            else
            {
              this.juegoPerdido("Era mayor, su puntaje ha sido de " + this.puntaje + " puntos");
              setTimeout(() => {
               this.reiniciar();
              }, 2500);  
            }
          }
          break;
    }
  }

}
