import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManageProductsService } from '../app-service/manage-products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss']
})
export class ManageproductsComponent implements OnInit {

  constructor(
    private _httpSer: ManageProductsService,
    private http: HttpClient
  ) { }

  onShowSpinner:boolean = false;

  titleData:any;

  ngOnInit(): void {
    this.onfetchData();
    this.titleData = this._httpSer.getTitle();
  }

  deleteButton(index: any) {
    this.products.splice(index, 1);
  }

  addProduct(proId: any, proName: any, proPrice: any) {
    this.products.push({
      id: proId.value,
      name: proName.value,
      price: proPrice.value
    });
  }

  products:any;

  // products: any[] = [
  //   {
  //     id: 'p1',
  //     name: 'Laptop',
  //     price: 2000
  //   },
  //   {
  //     id: 'p2',
  //     name: 'Washing Machine',
  //     price: 4500
  //   },
  //   {
  //     id: 'p3',
  //     name: 'TV',
  //     price: 3000
  //   },
  //   {
  //     id: 'p4',
  //     name: 'Mobile',
  //     price: 6000
  //   },
  //   {
  //     id: 'p5',
  //     name: 'Lock',
  //     price: 500
  //   },
  // ];

  // save in database:-
  saveProducts() {
    this._httpSer.saveProducts(this.products).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  // fetch data in firebase:-
  onfetchData(){
    this.onShowSpinner = true;
    this._httpSer.fetchProducts().subscribe(
      (res:any) => {
        const data = JSON.stringify(res);
        this.products = JSON.parse(data);
        this.onShowSpinner = false;
      },
      (err:any) => {
        console.log(err);
      }
    );
  };

}
