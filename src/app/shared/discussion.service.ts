import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private url = 'http://localhost:8081/';

  constructor(private http: HttpClient ,private chat : ChatService) { }



  putDiscussion(message : []) {
    return this.http.put(this.url + 'chat', this.chat.discussion);
  }
}
