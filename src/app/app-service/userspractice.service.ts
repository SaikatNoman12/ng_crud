import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPractice } from '../interface/user-practice.modal';

@Injectable({
  providedIn: 'root'
})
export class UserspracticeService {

  postUrl: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/usersPractice.json';

  constructor(private http: HttpClient) { }

  // set data in firebase use post method:-
  onSetData(userData: any) {
    return this.http.post<UserPractice>(this.postUrl, userData);
  }


  // get data in firebase use get method:-
  onGetData() {
    return this.http.get<UserPractice>(this.postUrl)
      .pipe(map(
        (response: any) => {
          const dataArr = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              dataArr.push({
                userId: key,
                ...response[key]
              });
            }
          }
          return dataArr;
        }
      ))
  }

  onEditData(userId:string, userData:any){
    const updateUrl =`https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/usersPractice/${userId}.json`; 

    return this.http.put(updateUrl, userData);
  }


  // delete data in firebase use delete method:-
  onDeleteData(userId:string){
    const deleteUrl = `https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/usersPractice/${userId}.json`;

    return this.http.delete(deleteUrl);
  }

}
