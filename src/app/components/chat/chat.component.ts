import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from '../../clases/mensaje';
import { getDatabase, ref, set, onValue, push, get, child} from "firebase/database";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensajes : any;
  mensaje : Message;
  objDiv : any;
  items : any;
  database : any;

  constructor(private chat : ChatService,public user : AuthService) { 

    this.database = getDatabase();

    let refe = ref(this.database,'chat');

    onValue(refe, (snapshot)=>{
      this.mensajes = Object.values(snapshot.val());
      console.log("cambie");
    });

    this.mensaje = {
      user: '',
      message: '',
      date: Date().toString(),
    }
  }

  sendMessage()
  {
    let hora = new Date();
    this.mensaje.user = this.user.logueado.correo;
    this.mensaje.date = hora.getHours() + ':' + hora.getMinutes();
    this.chat.writeUserData(this.mensaje);
    this.mensaje.message = '';
  }

  ngOnInit(): void {
  }

}
