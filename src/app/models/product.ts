//public = export in typescript
//buradaki interfaceler biraz daha sınırlandırmak amacıyla kullanılıyor!!
//typescript de interfacelerin önüne I koymuyoruz !! naming convension
export interface Product{
    productId:number;
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;

}