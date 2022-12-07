import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.scss']
})
export class ManageproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  deleteButton(index: any) {
    this.products.splice(index, 1);
  }

  addProduct(proId:any, proName:any, proPrice:any){
    this.products.push({
      id:proId.value,
      name:proName.value,
      price:proPrice.value
    });
  }


  products: any[] = [
    {
      id: 'p1',
      name: 'Laptop',
      price: 2000
    },
    {
      id: 'p2',
      name: 'Washing Machine',
      price: 4500
    },
    {
      id: 'p3',
      name: 'TV',
      price: 3000
    },
    {
      id: 'p4',
      name: 'Mobile',
      price: 6000
    },
    {
      id: 'p5',
      name: 'Lock',
      price: 500
    },
  ];

}
