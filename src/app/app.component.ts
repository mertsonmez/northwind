//c# daki using gibidir
import { Component } from '@angular/core';

//süslü parantez demek javascriptte object demek!!
//bir component basit bir class iken 
@Component({
  //app-root u tanıttığımız yer --> beni app-routre olarak index.html de kullanabilirsin demek !!
  selector: 'app-root',
  //app.component.html in datasını yönetecek olan komponentsin demek templete url
  // ./ aynı klasör demek
  templateUrl: './app.component.html',
  //bu html in css lerini koyduğumuz yer 
  //[ ] javascript dünyasında array demek yani birden fazla css iniz olabilir virgülle ayırabilirsiniz 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title:string dersek tip güvenli hale getirebiliriz !!
  title: string = 'northwind';
  user: string = "Engin Demirog";
  
}
