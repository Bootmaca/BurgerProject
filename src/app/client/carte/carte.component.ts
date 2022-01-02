import { Component, OnInit } from '@angular/core';
import {CarteService} from "../../services/carte.services";
import {Produit} from "../../_models/Produit";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  typeProduit: string = "Burger";
  tousLesProduits :Produit[] = [];
  tousLesProduitsChoisis :Produit[] = [];

  constructor(private carteService : CarteService) {
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

  changerTypeProduit(typeOfProductChoose: string){
    this.typeProduit = typeOfProductChoose;

    this.tousLesProduitsChoisis = [];

    //Parcours de tous les produits
    this.tousLesProduits.forEach(
      produit => {
        if(produit.typeProduit == typeOfProductChoose){ // Si le type du produit est égale au type de produit choisis
          this.tousLesProduitsChoisis.push(produit);
        }
      }
    );
  }



}
