import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  // get title in database:-
  onGetTitle(){
    return this.http.get('https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/user-title.json');
  }


}
