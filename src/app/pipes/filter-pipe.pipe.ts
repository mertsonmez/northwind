import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""; //varsa küçük harfe çevir yoksa zaten yok //toLocaleLowerCase tarayıcının diline göre karakterleri küçük harfe çevir
    return filterText?value.filter((p:Product) => p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;//ürünleri filtrele demek; !==-1 -1 den farklıysa yani varsa içinde demek
  }

}

//map,filter javascript fonksiyonları..