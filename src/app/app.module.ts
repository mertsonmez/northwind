import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//angular cli module e importlarıma ekledi
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

//farklı yerlerden yükleyebileceğimiz yada getirebileceğimiz paketler var
//httpClient için injection ını yapnmamızı sağlayan modülü var
import {HttpClientModule } from "@angular/common/http";
import { TodoComponent } from './components/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    //ve module de bu componentleri kullanacağım diyerek ekledi !!
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent
  ],
  imports: [
    //bizim yazmadıklarımızı importa ekliyoruz !!
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
