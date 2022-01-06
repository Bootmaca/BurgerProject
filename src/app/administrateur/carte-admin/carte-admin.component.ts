import { Component, OnInit } from '@angular/core';
import {CarteService} from "../../services/carte.services";
import {PanierService} from "../../services/panier.services";
import {Produit} from "../../_models/Produit";
import {Router} from "@angular/router";
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carte-admin',
  templateUrl: './carte-admin.component.html',
  styleUrls: ['./carte-admin.component.css']
})
export class CarteAdminComponent implements OnInit {
  typeProduit: string = "";
  tousLesProduits :Produit[] = [];
  tousLesProduitsAfterType :Produit[] = [];
  tousLesProduitsChoisis :Produit[] = [];
  idClient : number = 0;
  nomBoutonAjout :string = "";
  faPlusCircle = faPlusCircle;


  constructor(private carteService : CarteService, private router: Router, private panierService: PanierService) {
    let user:any = sessionStorage.getItem("utilisateur");
    user = JSON.parse(user);
    this.idClient = user['idUtil'];

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
      sessionStorage.setItem("typeProduit", typeOfProductChoose) //Mise en session du produit choisis
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

  modifierProduit(idProduit: number){
    // this.panierService.rechercherTousLesProduits(this.idClient, idProduit, this.typeProduit);
    console.log("Modification du produit numero : " + idProduit)
  }


  supprimerProduit(idProduit: number){
    // this.panierService.rechercherTousLesProduits(this.idClient, idProduit, this.typeProduit);
    console.log("Suppresion du produit numero : " + idProduit)
  }



}
