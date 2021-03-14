import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
// import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

//axios,fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // apiUrl = "https://localhost:44300/api/products/getall";

  //OnInit ne demek ?
  //Bizim komponentimiz ilk kez açıldığında çalışan methoddur.
  // prod comp dom a yerleştiğinde çalışan koddur.

  //bir yerde any görürsen her veri türü olabilir demek
  // product:any={}
  // product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5, unitsInStock: 5 } //object { }
  // product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5, unitsInStock: 5 }
  // product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5, unitsInStock: 5 }

  products: Product[] = [
    /*this.product1 , this.product2 , this.product3 , this.product4 , this.product5*/
  ]; // array []
  //buna şuan gerek kalmadı --
  // productResponseModel: ProductResponseModel={
  //   data: this.products,
  //   message:"",
  //   success:true
  // };
  dataLoaded = false; //data koyduk yönetmek için

  //burada private httpClient:HttpClient http client tipinde bir nesne istiyorum diyorsunuz !!
  //ctor da verdiğiniz değişken class içerisinde tanımlanmış bir değişken gibi oluyor ve buna heryerden erişebiliyoruz !!

  //bir service i kullanabilmek için yapman gereken bu!!
  constructor(/*private httpClient:HttpClient*/ private productService: ProductService, private activatedRoot: ActivatedRoute) {}
  //activatedRoot  buil-in bir

  //constructor ın amacı product componenti bellekte oluşturmaktır. yani bir instance ını oluşturmaktır
  //bir datayı initilize etmek dışında birşey yapılmamalıdır

  ngOnInit(): void {
    // this.getProducts();

    this.activatedRoot.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts()
      }  
    })  
  }

  //biz her işi yapıcak nesne için bir operasyon yazıyoruz!!

  getProducts() {
    //apiye httpclient nesnesi vasıtasıyla apiye bağlanıyoruz !!!!!!
    //ilk olarak import { HttpClient } from '@angular/common/http'; ekliyoruz
    //httpclient ile bacakend birşeyine ulaşıyoruz --> videoya dön yaz
    //http clienti kullanabilmek için onu enjekte etmek gerekiyor ctor a

    //javascriptte herşey fonksiyon o yüzden this dediğimde en üstteki classına karşılık geliyor
    //gelen datayı product response modeline map edeceksin demek !!

    // this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
    //   // this.productResponseModel = response;
    //   this.products = response.data;
    // });

    // observable tasarım deseni kullandıkları için get i subscribe ile devam ettirmek gerekiyor.
    //subscribe ol abone ol demek
    //(response) => {} gelen yanıt için demek bu

    /*
    httpclient ile get isteği yapıyorum nereye this.apiurl e
    gelen datayı şuna pars et ProductResponseModel
    çalıştırmak için subscribe olman lazım    
    */

    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true; //bu kod senkron çalışmamızı sağlıyor
    });

    //getProducts Observable döndürüyor. Observable demek sen buna subscribe olabilirsin demek!!
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true; //bu kod senkron çalışmamızı sağlıyor
      });
  }
}
