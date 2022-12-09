import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPractice } from '../interface/user-practice.modal';

@Injectable({
  providedIn: 'root'
})
export class UserspracticeService {

  postUrl: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/usersPractice.json';

  constructor(private http: HttpClient) { }

  onSetData(userData: any) {
    return this.http.post<UserPractice>(this.postUrl, userData);
  }


}
