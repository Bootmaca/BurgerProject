import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.css']
})
export class BarreRechercheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filtreNomProduit(nomProduit :any){
    console.log((nomProduit.target as HTMLInputElement).value)
  }

}
