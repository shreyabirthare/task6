import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inform } from './info';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
   }
  configUrl ='https://jsonplaceholder.typicode.com/posts'
  getdetails() {
  return this.http.get(this.configUrl);
}
}
