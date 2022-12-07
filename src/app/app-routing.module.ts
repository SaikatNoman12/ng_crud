import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'manage-practice'
  },
  {
    path: 'manage-products',
    loadChildren: () => import('./manageproducts/manageproducts.module')
      .then(m => m.ManageproductsModule)
  },
  {
    path: 'manage-practice',
    loadChildren: () => import('./manage-products-practice/manage-products-practice.module')
      .then(m => m.ManageProductsPracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
