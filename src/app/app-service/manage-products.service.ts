import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  url:any = 'https://products-268b8-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';
  url2:any = 'https://products-268b8-default-rtdb.asia-southeast1.firebasedatabase.app/proTitle.json';


  constructor(
   private http:HttpClient
  ) { }

  saveProducts(products:any[]){
    // return this.http.post(this.url, products);
    return this.http.put(this.url, products);
  }

  fetchProducts(){
    return this.http.get(this.url);
  }

  getTitle(){
    return this.http.get(this.url2);
  }

}

