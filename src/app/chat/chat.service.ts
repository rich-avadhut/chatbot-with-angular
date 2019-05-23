import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable, BehaviorSubject } from 'rxjs';

declare var $: any;

export class Message {
  constructor(public content: any, public sentBy: string) {

  }
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  //conversation = new BehaviorSubject<Message[]>([]);
  conversation = [];

  constructor() { }

  addLoader() {
    let loader = {
      type: -1,
      speech: 'loading',
    }
    const loaderMessage = new Message([loader], 'bot');
    this.conversation.push(loaderMessage);
  }

  removeLoader(index: number) {
    this.conversation.splice(index - 1, 1);
  }

  talk() {
    this.addLoader();
    this.client.eventRequest('Welcome')
      .then(res => {
        this.removeLoader(this.conversation.length);
        if (res.result.fulfillment.data) {
          let payload = {
            type: 4,
            data: res.result.fulfillment.data.default,
          };
          res.result.fulfillment.messages.push(payload);
        }
        console.log(JSON.stringify(res));
        const speech = res.result.fulfillment.messages;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }

  update(msg: Message) {
    this.conversation.push(msg);
    $("#messages").animate({ scrollTop: $(document).height() }, "fast");
  }

  converse(msg: string, index?: number) {
    if(msg.trim() == ""){
      return;
    }
    if (typeof index != 'undefined') {
      this.conversation[index]['content'] = this.conversation[index]['content'].filter(data => {
        if (data.type != '2') {
          return data;
        } else {
          return;
        }
      });
    }
    const userMessage = new Message([{ type: 0, speech: msg }], 'user');
    this.update(userMessage);

    this.addLoader();
    this.client.textRequest(msg)
      .then(res => {
        this.removeLoader(this.conversation.length);
        if (res.result.fulfillment.data) {
          let payload = {
            type: 4,
            data: res.result.fulfillment.data.default,
          };
          res.result.fulfillment.messages.push(payload);
        }
        const speech = res.result.fulfillment.messages;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }

}