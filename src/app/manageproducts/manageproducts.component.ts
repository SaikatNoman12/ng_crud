import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ManageProductsService } from '../app-service/manage-products.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss']
})
export class ManageproductsComponent implements OnInit {


  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('price') price!: ElementRef;
  onShowSpinner: boolean = false;
  titleData: any;
  products: any[] = [];
  editData: boolean = false;
  editIndex: any;

  constructor(
    private _httpSer: ManageProductsService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.onfetchData();
    this.titleData = this._httpSer.getTitle();
  }

  deleteButton(index: any) {
    this.products.splice(index, 1);
    this.saveProducts();
  }

  addProduct(proId: any, proName: any, proPrice: any) {

    if (this.editData) {
      this.products[this.editIndex] = {
        id: proId.value,
        name: proName.value,
        price: proPrice.value
      }
      proId.value = '';
      proName.value = '';
      proPrice.value = '';
      this.editData = false;
    }
    else {
      this.products.push({
        id: proId.value,
        name: proName.value,
        price: proPrice.value
      });

      proId.value = '';
      proName.value = '';
      proPrice.value = '';
    }

    this.saveProducts();
  }

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
        // console.log(res);
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }


  editButton(index: number) {
    this.editData = true;

    this.editIndex = index;

    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }


  // fetch data in firebase:-
  onfetchData() {
    this.onShowSpinner = true;
    this._httpSer.fetchProducts().subscribe(
      (res: any) => {
        const data = JSON.stringify(res);
        this.products = JSON.parse(data);
        this.onShowSpinner = false;
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

}
