import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  urlPostPut: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';

  // urlPut: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/productsPut.json';

  constructor(
    private http: HttpClient,
  ) { }

  // add request headers:-
  private headers = new HttpHeaders({
    'Content-Type': 'Nomanapplication/json'
  })

  // post method:-
  onData(products: any) {
    // return this.http.post(this.urlPost, products);
    return this.http.put(this.urlPostPut, products, { headers: this.headers });
  }

  onFetchData() {
    return this.http.get(this.urlPostPut);
  }


  // get title:-
  url3: string = 'https://practice-6b131-default-rtdb.asia-southeast1.firebasedatabase.app/title.json';


  onGetTitle() {
    return this.http.get(this.url3);
  }


}
