import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  logUsuariosCollectionReference : any;
  resultadosCollectionReference : any;
  encuestaCollectionReference : any;

  constructor(public FireStore: Firestore) { 
    this.logUsuariosCollectionReference = collection(this.FireStore,'registros');
    this.resultadosCollectionReference = collection(this.FireStore,'resultados');
    this.encuestaCollectionReference = collection(this.FireStore, 'encuesta');
  }

  agregarLog(log : any){
    return addDoc(this.logUsuariosCollectionReference,log);
  }

  agregarEncuesta(encuesta : any){
    return addDoc(this.encuestaCollectionReference,encuesta);
  }

  agregarResultado(resultado : any){
    return addDoc(this.resultadosCollectionReference,resultado);
  }

  ListaUsuarios():Observable<any[]>{
    return collectionData(this.logUsuariosCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }

  listaResultados():Observable<any[]>{
    return collectionData(this.resultadosCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }
}
