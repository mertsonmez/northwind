import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

//form Builder reactive formun service i bizim bir form html ile burada yazacağımız kontrolleri ilişkilendiriğimiz nokta
//form builder servisi html deki form ile burayı yapılandırmamızı sağlıyor 

//

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private productService : ProductService , private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.add();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["", Validators.required], //ilk verdiğim değer default u olur 
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
      categoryId:["", Validators.required]
    })
  }

  add(){
    //ekleme işlemi yapabilmek için form valid mi bilmemiz gerek
    if (this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value) //product model için bir object oluşturuyor içi boş ve buradaki alalnların hepsini bu objenin içine ekleyecek.
      this.productService.add(productModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message,"Başarılı")
      }, responseError =>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      })
    }
    else{
      this.toastrService.error("Formunuz Eksik","Dikkat; Ürün Eklenemedi")
    }

  }

  // reactive formlar için forms module olması gerekiyor
  //bu8nun

}
