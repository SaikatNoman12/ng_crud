import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageproductsRoutingModule } from './manageproducts-routing.module';
import { ManageproductsComponent } from './manageproducts.component';


@NgModule({
  declarations: [
    ManageproductsComponent
  ],
  imports: [
    CommonModule,
    ManageproductsRoutingModule
  ]
})
export class ManageproductsModule { }
