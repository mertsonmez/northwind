import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

//Injectable görürsek bu bir servistir diyoruz!!
//HttpClient gibi bunu enjekte edicez!
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44300/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts() : Observable<ListResponseModel<Product>> { //subscribe olabilir bir response model döneceksin demek !!
    //let keywordu kullanarak değişken tanımlayacağız ApiUrl de kullanmak için...
    let newPath = this.apiUrl + "products/getall"

    
    
    
    
    //apiye httpclient nesnesi vasıtasıyla apiye bağlanıyoruz !!!!!!  
    //ilk olarak import { HttpClient } from '@angular/common/http'; ekliyoruz
    //httpclient ile bacakend birşeyine ulaşıyoruz --> videoya dön yaz  
    //http clienti kullanabilmek için onu enjekte etmek gerekiyor ctor a 



    //javascriptte herşey fonksiyon o yüzden this dediğimde en üstteki classına karşılık geliyor
    //gelen datayı product response modeline map edeceksin demek !!


  //  return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl); eski kod
   return this.httpClient.get<ListResponseModel<Product>>(newPath);

    // observable tasarım deseni kullandıkları için get i subscribe ile devam ettirmek gerekiyor.
    //subscribe ol abone ol demek
    //(response) => {} gelen yanıt için demek bu 

    /*
    httpclient ile get iisteği yapıyorum nereye this.apiurl e
    gelen datayı şuna pars et ProductResponseModel
    çalıştırmak için subscribe olman lazım    
    */
  }

  getProductsByCategory(categoryId:number) : Observable<ListResponseModel<Product>> { 
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId;

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add",product)
  }


}
