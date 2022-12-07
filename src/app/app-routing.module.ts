import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'manage-products'
  },
  {
    path: 'manage-products',
    loadChildren: () => import('./manageproducts/manageproducts.module')
      .then(m => m.ManageproductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
