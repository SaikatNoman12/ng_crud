import { User } from './../interface/user.modal';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/users.json';

  constructor(
    private http: HttpClient
  ) { }

  // get title in database:-
  onGetTitle() {
    return this.http.get('https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/user-title.json');
  }

  // on post data:-
  onPostData(user: any) {
    return this.http.post<User>(this.url, user);
  }

  // on get data:-
  onGetDb() {
    return this.http.get<User>(this.url)
      .pipe(map((resData: any) => {
        const dataInArr = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            dataInArr.push({
              userId: key,
              ...resData[key]
            });
          }
        }
        return dataInArr;
      }));
  }

  // on edit data:-
  editDataDB(userId: string, userData: any) {
    const editUrl = `https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`;

    return this.http.put(editUrl, userData);
  }

  // on delete data:-
  onDeleteDb(userId: string) {
    const url = `https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`;

    return this.http.delete(url);
  }


}
