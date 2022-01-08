import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar-produit',
  templateUrl: './nav-bar-produit.component.html',
  styleUrls: ['./nav-bar-produit.component.css']
})
export class NavBarProduitComponent implements OnInit {
  @Output() eventEmitterChangerProduit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changerProduit(typeOfProductChoose: string){
    // On envoie la valeur du type de produit choisi au component parent
    this.eventEmitterChangerProduit.emit(typeOfProductChoose);
  }

}
