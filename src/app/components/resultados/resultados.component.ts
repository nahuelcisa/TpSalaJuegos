import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  resultados : any;
  constructor(private fs : FirestoreService) {
    this.fs.listaResultados().subscribe((data)=>{
      this.resultados = data;
      this.resultados.forEach((element: any) => {
        let d = new Date(element.hora.seconds * 1000);
        let date = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes();
        element.hora = date
      });
      console.log(this.resultados);
    });
   }

  ngOnInit(): void {
  }

}
