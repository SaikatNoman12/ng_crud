import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageProductsService {

  url:any = 'https://products-268b8-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';

  constructor(
   private http:HttpClient
  ) { }

  saveProducts(products:any[]){
    return this.http.post(this.url, products);
  }
}
