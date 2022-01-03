import { Component, OnInit } from '@angular/core';
import {CarteService} from "../../services/carte.services";
import {Produit} from "../../_models/Produit";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  typeProduit: string = "";
  tousLesProduits :Produit[] = [];
  tousLesProduitsAfterType :Produit[] = [];
  tousLesProduitsChoisis :Produit[] = [];

  constructor(private carteService : CarteService, private router: Router) {

    this.carteService.rechercherTousLesProduits();
    new Promise(
      () => {
        setTimeout(
          ()=>{
            this.tousLesProduits = this.carteService.tousLesProduits;

            //On récupère le type de produit à afficher en premier et si il est égale à null on lui donne burger
            this.typeProduit = sessionStorage.getItem("typeProduit") || "Burger";

            this.changerTypeProduit(this.typeProduit);
          },1000
        )
      }
    );

  }

  ngOnInit(): void {
  }

  //Fonction qui permet de changer le type du produit
  changerTypeProduit(typeOfProductChoose: string){
    if(typeOfProductChoose == "Panier"){
      this.router.navigate(['client/panier']); // Navigation vers la page panier
    }else{
      this.typeProduit = typeOfProductChoose;

      this.tousLesProduitsAfterType = [];

      //Parcours de tous les produits
      this.tousLesProduits.forEach(
        produit => {
          if(produit.typeProduit == typeOfProductChoose && produit.isByCreator){ // Si le type du produit est égale au type de produit choisis
            this.tousLesProduitsAfterType.push(produit);
          }
        }
      );
      this.tousLesProduitsChoisis = this.tousLesProduitsAfterType;
    }
  }

  //Fonction qui permet de filtrer le nom du produit
  filtrerNom(nomChoisis: string){
    this.tousLesProduitsChoisis = [];
    //Parcours de tous les produits
    this.tousLesProduitsAfterType.forEach(
      produit => {
        if(produit.libelle.toLowerCase().includes(nomChoisis.toLowerCase())){ // Si le type du produit est égale au type de produit choisis
          this.tousLesProduitsChoisis.push(produit);
        }
      }
    );
  }



}
