import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfiltre'

})
export class SearchfiltrePipe implements PipeTransform {

  transform(items: any[], recherche: string): any[] {
    // si la collection est vide, on la laisse vide
    if (!items) {
      return [];
    }
    //si le string est vide, on ne fait rien on laisse la collection tel quel
    if (!recherche) {
      return items;
    }// on regarde pour chaque item dans la collection si son nom inclue le string de la recherche si oui il est renvoyé
    return items.filter(data => {
      return data.nom.toLowerCase().includes(recherche.toLowerCase());
    });
  }
}
