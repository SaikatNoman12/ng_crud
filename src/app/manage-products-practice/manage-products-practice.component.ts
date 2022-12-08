import { PracticeService } from './../app-service/practice.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage-products-practice',
  templateUrl: './manage-products-practice.component.html',
  styleUrls: ['./manage-products-practice.component.scss']
})
export class ManageProductsPracticeComponent implements OnInit {

  // all input:-
  @ViewChild('id') id!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('price') price!: ElementRef;

  products: any = [];
  editSpin: boolean = false;
  editProductData: boolean = false;
  editDataIndex: any;

  constructor(
    private _practiceSer: PracticeService
  ) { }

  title: any = this._practiceSer.onGetTitle();


  ngOnInit(): void {
    this.fetchData();
  }

  addData(proId: any, proName: any, proPrice: any) {

    if (this.editProductData) {
      this.products[this.editDataIndex] = {
        id: proId.value,
        name: proName.value,
        price: proPrice.value
      }

      this.editProductData = false;
    }
    else {

      this.products.push({
        id: proId.value,
        name: proName.value,
        price: proPrice.value,
      });

    }

    // empty all input value;
    proId.value = '';
    proName.value = '';
    proPrice.value = '';

    this.savePutData();
  }

  deleteData(index: any) {
    this.products.splice(index, 1);
    this.savePutData();
  }


  // put on firebase server:-
  savePutData() {
    this._practiceSer.onData(this.products).subscribe((res: any) => {

    }, (err: any) => {

    });
  }

  // fetch data:-
  fetchData() {
    this.editSpin = true;

    this._practiceSer.onFetchData().subscribe(
      (res: any) => {
        if (res !== null) {
          const data = JSON.stringify(res);
          this.products = JSON.parse(data);
        }
        this.editSpin = false;
      },
      (err: any) => {

      }
    )
  }

  editData(index: number) {
    this.editDataIndex = index;

    const product = this.products[index];
    this.id.nativeElement.value = product.id;
    this.name.nativeElement.value = product.name;
    this.price.nativeElement.value = product.price;

    this.editProductData = true;
  }

}
