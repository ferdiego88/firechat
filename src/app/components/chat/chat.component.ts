import { Component, OnInit} from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit  {
  mensaje = '';
  elemento: any;
  constructor(public chatService: ChatService) {
    this.chatService.cargarMensajes();
    this.irUltimoMensaje();
  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes');
  }
  enviarMensaje(){
   // console.log(this.mensaje);
   if (this.mensaje.length === 0) {
     return;
   }
   this.chatService.agregarMensaje(this.mensaje)
         .then(() => this.mensaje = '')
         .catch((err) => console.error('Error al enviar', err));
   this.irUltimoMensaje();
  }

  irUltimoMensaje(){
    setTimeout( () => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 1000);
  }

}
