import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserPracticeRoutingModule } from './manage-user-practice-routing.module';
import { ManageUserPracticeComponent } from './manage-user-practice.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageUserPracticeComponent
  ],
  imports: [
    CommonModule,
    ManageUserPracticeRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManageUserPracticeModule { }
