import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

  nombre : string = '';
  apellido : string = '';
  edad : number = 0;
  nroTel : number = 0;
  preg1 : string = '';
  preg2 : string = '';
  preg3 : string = '';

  constructor(private fs : FirestoreService) { }

  ngOnInit(): void {
  }

  enviarResultados(){
    let encuesta = {
      nombre: this.nombre,
      apellido : this.apellido,
      edad : this.edad,
      nroTel : this.nroTel,
      preg1 : this.preg1,
      preg2 : this.preg2,
      preg3: this.preg3
    }

    this.fs.agregarEncuesta(encuesta);
  }
}
