import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltre'
})
export class SearchfiltrePipe implements PipeTransform {

  transform(items: any[], recherche: string): any[] {
    if (!items) {
      return [];
    }
    if (!recherche) {
      return items;
    }
    return items.filter(data => {
      return data.nom.toLowerCase().includes(recherche);
    });
  }

}
