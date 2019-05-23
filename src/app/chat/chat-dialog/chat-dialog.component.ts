import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
declare var $: any;
 
@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {
  //messages : Observable<Message[]>;
  messages : any;
  formValue : string;

  constructor(public chat:ChatService) { }

  ngOnInit() {
    this.chat.talk();
    this.messages = this.chat.conversation;
    //.pipe(scan((acc,val)=>acc.concat(val)));
  }

  sendMessage(){
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
  sendMessageSelected(msg,index){
    this.chat.converse(msg,index);
  }

  goToLink(url: string){
      window.open(url, "_blank");
  }
}
