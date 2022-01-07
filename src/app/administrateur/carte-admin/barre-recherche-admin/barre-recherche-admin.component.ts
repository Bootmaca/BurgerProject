import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barre-recherche-admin',
  templateUrl: './barre-recherche-admin.component.html',
  styleUrls: ['./barre-recherche-admin.component.css']
})
export class BarreRechercheAdminComponent implements OnInit {
  @Output() eventEmitterFiltreNom = new EventEmitter<string>();

  barreDeRecherche !: HTMLInputElement;

  constructor() { }

  ngOnInit(): void {
  }

  filtreNomProduit(nomProduit :any){
    if(this.barreDeRecherche == undefined){
      this.barreDeRecherche = nomProduit.target;
    }
    this.eventEmitterFiltreNom.emit((nomProduit.target as HTMLInputElement).value);
  }

  viderBarre(){
    this.barreDeRecherche.value = "";
    this.eventEmitterFiltreNom.emit("");
  }

  viderLaBarreDeRecherche(barre: any){
    (barre.target as HTMLInputElement).value = "";
    this.eventEmitterFiltreNom.emit("");
  }

}
