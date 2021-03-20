import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//angular cli module e importlarıma ekledi
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

//farklı yerlerden yükleyebileceğimiz yada getirebileceğimiz paketler var
//httpClient için injection ını yapnmamızı sağlayan modülü var
import { HttpClientModule } from "@angular/common/http";
import { FormsModule , ReactiveFormsModule } from "@angular/forms"; //ngModel keywordu ile binding yapıp çalışması için eklememiz gerekiyor
import { TodoComponent } from './components/todo/todo.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import{ ToastrModule } from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';


@NgModule({
  declarations: [
    AppComponent,
    //ve module de bu componentleri kullanacağım diyerek ekledi !!
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent
  ],
  imports: [
    //bizim yazmadıklarımızı importa ekliyoruz !!
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }) //forRoot demek toastr ı bizim projemiz için kullanılabilir hale getir demek
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
