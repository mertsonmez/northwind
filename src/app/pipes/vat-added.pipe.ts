import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number/*ilk değer db den gelen*/, rate: number/*parametre*/): number/*dönüş tipi*/  {
    return value + (value * rate / 100);
  }

}
