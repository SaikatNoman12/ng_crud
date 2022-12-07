import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageproductsRoutingModule } from './manageproducts-routing.module';
import { ManageproductsComponent } from './manageproducts.component';
import { ManageProductsService } from '../app-service/manage-products.service';


@NgModule({
  declarations: [
    ManageproductsComponent
  ],
  imports: [
    CommonModule,
    ManageproductsRoutingModule,
    HttpClientModule
  ],
  providers:[
    ManageProductsService
  ]
})
export class ManageproductsModule { }
