import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: '',pathMatch:"full" /* */ , component:ProductComponent /*herhangi birşey verilmediğinde ne olsun??*/ },
  {path: 'products', component:ProductComponent },
  {path: 'products/category/:categoryId', component:ProductComponent }, //parametre olarak ne vericeksen :parametre şeklinde yazılır
  {path: 'products/add', component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
