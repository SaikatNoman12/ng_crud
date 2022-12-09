import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'manage-user-practice'
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
  },
  {
    path: 'manage-user',
    loadChildren: () => import('./manage-users/manage-users.module')
      .then(m => m.ManageUsersModule)
  },
  {
    path: 'manage-user-practice',
    loadChildren: () => import('./manage-user-practice/manage-user-practice.module')
      .then(m => m.ManageUserPracticeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
