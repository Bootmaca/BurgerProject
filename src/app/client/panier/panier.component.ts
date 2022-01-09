import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PanierService} from "../../services/panier.services";
import {Frite} from "../../_models/Frite";
import {Dessert} from "../../_models/Dessert";
import {Boisson} from "../../_models/Boisson";
import {Autre} from "../../_models/Autre";
import {Burger} from "../../_models/Burger";
import {Menu} from "../../_models/Menu";

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
  lesMenus : Menu[] = [];
  prixTotal : number = 0;

  constructor( private router: Router, private panierService: PanierService) {
    let user: any = sessionStorage.getItem("utilisateur");
    user = JSON.parse(user);
    let idClient = user['idUtil'];

    this.panierService.rechercherTousLesProduitsDuPanier(idClient);
    this.panierService.rechercherTousLesBurgerDuPanier(idClient);
    this.panierService.rechercherTousLesMenuDuPanier(idClient);

    new Promise(
      () => {
        setTimeout(
          ()=>{
            this.lesFrites = this.panierService.lesFrites;
            this.lesDessert = this.panierService.lesDessert;
            this.lesBoisson = this.panierService.lesBoisson;
            this.lesAutres = this.panierService.lesAutres;
            this.lesBurgers = this.panierService.lesBurgers;
            this.lesMenus = this.panierService.lesMenus;
            this.calculDuPrixTotal();
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

  calculDuPrixTotal(){
    let prix : number = 0;

    this.lesFrites.forEach(
      frite => {
        prix =+ (frite.prix * frite.quantite) + prix;
      }
    );

    this.lesMenus.forEach(
      menu => {
        prix =+ (menu.prix * menu.quantite) + prix;
      }
    );

    this.lesAutres.forEach(
      autre => {
        prix =+ (autre.prix * autre.quantite) + prix;
      }
    );

    this.lesDessert.forEach(
      dessert => {
        prix =+ (dessert.prix * dessert.quantite) + prix;
      }
    );

    this.lesBurgers.forEach(
      burger => {
        prix =+ (burger.prix * burger.quantite) + prix;
      }
    );

    this.lesBoisson.forEach(
      boisson => {
        prix =+ (boisson.prix * boisson.quantite) + prix;
      }
    );

    this.prixTotal = prix;
  }

  payer(){
    this.router.navigate(['/client/paiement']); // Navigation vers la page client
  }

}
