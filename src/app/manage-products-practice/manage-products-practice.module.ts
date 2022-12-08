import { HttpClientModule } from '@angular/common/http';
import { PracticeService } from './../app-service/practice.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProductsPracticeRoutingModule } from './manage-products-practice-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageProductsPracticeRoutingModule,
    HttpClientModule
  ],
  providers: [
    PracticeService
  ]
})
export class ManageProductsPracticeModule { }
