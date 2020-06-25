import { Component, NgModule } from '@angular/core';
import { ChatService } from 'src/app/shared/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'websocket-frontend';
  input;
  constructor(public chatService: ChatService) { }
  sendMessage() {
    if (this.input) {
      this.chatService.sendMessage(this.input);
      this.input = '';
    }
  }
}
