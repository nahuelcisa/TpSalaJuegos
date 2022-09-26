import { Injectable } from '@angular/core';
/* import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage'; */
import { Firestore, collection, addDoc,collectionData,doc,deleteDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

/*    logCollectionsreference : any;
  logs : Observable<any>;
  logsArray : any = []; */

  logUsuariosCollectionReference : any;

  constructor(public FireStore: Firestore) { 

/*     this.logCollectionsreference = collection(this.FireStore, 'logs');
    this.logs = this.logCollectionsreference.valueChanges({idField: 'id'});

    this.traerLogs().subscribe(value => {
      this.logsArray = value;
    }); */
    this.logUsuariosCollectionReference = collection(this.FireStore,'logs');
  }

  agregarLog(logNuevo : any){
    let a = {
      nombre : ' nahuel'
    }
    return addDoc(this.logUsuariosCollectionReference,a);
  }

/*   agregarLog(log: any){
    return addDoc(this.logCollectionsreference,log);
  }

  traerLogs()
  {
    return this.logs;
  }  */

  ListaUsuarios():Observable<any[]>{
    return collectionData(this.logUsuariosCollectionReference,{idField: 'id'}) as Observable<any[]>;
  }
}
