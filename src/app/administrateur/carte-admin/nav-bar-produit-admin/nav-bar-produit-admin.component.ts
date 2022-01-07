import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar-produit-admin',
  templateUrl: './nav-bar-produit-admin.component.html',
  styleUrls: ['./nav-bar-produit-admin.component.css']
})
export class NavBarProduitAdminComponent implements OnInit {
  @Output() eventEmitterChangerProduit = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  changerProduit(typeOfProductChoose: string) {
    // On envoie la valeur du type de produit choisi au component parent
    this.eventEmitterChangerProduit.emit(typeOfProductChoose);
  }
}
