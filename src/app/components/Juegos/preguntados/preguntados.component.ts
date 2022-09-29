import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../../clases/pregunta';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.scss']
})
export class PreguntadosComponent implements OnInit {

  preguntas = [
    {
      pregunta: "¿Cuál es el nombre de este trago?",
      img: "",
      opciones: ["Mojito","Avalon","Negroni","Margarita"],
      correcta: "Avalon"
    },
    {
      pregunta: "¿Qúe trago es este?",
      img: "",
      opciones: ["Vesper","Butterfly Effect","Mountain Bramble","Shanghai Cocktail"],
      correcta: "Vesper"
    },
    {
      pregunta: "¿Cuál es este trago?",
      img: "",
      opciones: ["Quentin","Lemon drop","Bobby Burns Cocktail","Limeade"],
      correcta: "Limeade"
    },
    {
      pregunta: "¿Cuál es el nombre de este trago?",
      img: "",
      opciones: ["Mary Pickford","Lazy Coconut Paloma","Frosé","New York Lemonade"],
      correcta: "Frosé"
    },
    {
      pregunta: "¿Qué trago es el siguiente?",
      img: "",
      opciones: ["Halloween Punch","Kamikaze","Zombie","Zizi Coin-coin"],
      correcta: "Kamikaze"
    },
    {
      pregunta: "¿Cómo se le llama al siguiente trago?",
      img: "",
      opciones: ["Jackhammer","Ace","Blueberry Mojito","Gagliardo"],
      correcta: "Jackhammer"
    }
  ]

  preguntasRestantes : Pregunta[] = [];
  preguntaAnterior : any = "";
  preguntaActual : any = "";
  correcta : boolean = false;
  incorrecta : boolean = false;

  constructor(private toast : ToastrService,public api : ApiService) { 
    this.InicializarPregunta();
    this.llamarApi();
   }

   llamarApi()
   {
      let url : string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.preguntaActual.correcta;
      this.api.setearUrl(url);
      this.api.apiLlamada().subscribe((dato : any)=>{
      this.preguntaActual.img = dato.drinks[0].strDrinkThumb;
    });
   }

   InicializarPregunta()
   {
      let random : number = Math.floor(Math.random() * this.preguntas.length);
      this.preguntaActual = this.preguntas[random];
    }
    
    generarOtraPregunta()
    {
      this.preguntasRestantes = this.preguntas.filter((pregunta : Pregunta) => pregunta != this.preguntaActual && pregunta != this.preguntaAnterior);
      let random : number = Math.floor(Math.random() * this.preguntasRestantes.length);
      this.preguntaActual = this.preguntasRestantes[random];
      this.llamarApi();
    }

   validarRespuesta(opcion : string)
   {
      if(opcion == this.preguntaActual.correcta)
      {
        this.toast.success("Acertaste la respuesta","Correcto");
        this.correcta = true;
        this.reiniciar();
      }
      else
      {
        this.toast.error("No acertaste la respuesta","Incorrecto");
        this.incorrecta = true;
        this.correcta = true;
        this.reiniciar();
      }
   }

   reiniciar()
   {
     setTimeout(() => {
       this.correcta = false;
       this.incorrecta = false;
       this.generarOtraPregunta();
     }, 2000);
   }
  ngOnInit(): void {
  }

}
