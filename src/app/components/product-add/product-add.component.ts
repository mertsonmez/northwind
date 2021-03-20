import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

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
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["", Validators.required], //ilk verdiğim değer default u olur 
      unitPrice:["", Validators.required],
      unitsInStock:["", Validators.required],
      categoryId:["", Validators.required]
    })
  }

  // reactive formlar için forms module olması gerekiyor
  //bu8nun

}
