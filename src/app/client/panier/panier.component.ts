import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PanierService} from "../../services/panier.services";
import {Frite} from "../../_models/Frite";
import {Dessert} from "../../_models/Dessert";
import {Boisson} from "../../_models/Boisson";
import {Autre} from "../../_models/Autre";
import {Burger} from "../../_models/Burger";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  lesFrites : Frite[] = [];
  lesDessert : Dessert[] = [];
  lesBoisson : Boisson[] = [];
  lesAutres : Autre[] = [];
  lesBurgers : Burger[] = [];

  constructor( private router: Router, private panierService: PanierService) {
    let user: any = sessionStorage.getItem("utilisateur");
    user = JSON.parse(user);
    let idClient = user['idUtil'];

    this.panierService.rechercherTousLesProduitsDuPanier(idClient);
    this.panierService.rechercherTousLesBurgerDuPanier(idClient);

    new Promise(
      () => {
        setTimeout(
          ()=>{
            this.lesFrites = this.panierService.lesFrites;
            this.lesDessert = this.panierService.lesDessert;
            this.lesBoisson = this.panierService.lesBoisson;
            this.lesAutres = this.panierService.lesAutres;
            this.lesBurgers = this.panierService.lesBurgers;
          },1000
        )
      }
    );

  }

  ngOnInit(): void {
  }

  redirigerVersProduit(typeOfProductChoose: string){
    sessionStorage.setItem("typeProduit",typeOfProductChoose);
    this.router.navigate(['/client/carte']); // Navigation vers la page client
  }

  payer(){
    this.router.navigate(['/client/paiement']); // Navigation vers la page client
  }

}
