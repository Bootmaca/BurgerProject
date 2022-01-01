import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Produit} from "src/app/_models/Produit";

@Injectable()
export class CarteService{
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/";
  lesProduits:any =[];
  tousLesProduits :Produit[] = [];


  constructor(private http: HttpClient) {

  }


  //Connexion
  rechercherTousLesProduits(){

    this.http
      //Liens vers le script php permettant la selection des produits
      .get<any[]>(this.urlDeBase+'recupererTousLesProduits.php')
      .subscribe((laData) => {
        this.lesProduits = laData; //récupération des produits

        //Nombre de produits
        let nombreDeProduit = this.lesProduits.length;

        //Déclaration des variables
        let unProduit : Produit;
        let idProduit;
        let libelle;
        let prix;
        let image;
        let isDispo;
        let typeProduit;

        //Parcours de tous les produits
        //Pour chaque produit création d'un objet de type Produit et insertion dans le tableau touslesProduits
        for(let i=0; i<nombreDeProduit; i++){
          idProduit = this.lesProduits[i]["id"];
          libelle = this.lesProduits[i]["libelle"];
          prix = this.lesProduits[i]["prix"];
          image = this.lesProduits[i]["image"];
          isDispo = this.lesProduits[i]["isDispo"] == 1; //True si isDispo égale à 1 false sinon
          typeProduit = this.lesProduits[i]["typeProduit"];
          unProduit = new Produit(idProduit, libelle, prix, image, isDispo, typeProduit); // Création de l'objet de type Produit
          this.tousLesProduits.push(unProduit); // Insertion du produit dans le tableau
        }

      }, (error) => { //Si il y a un problème lors de la récupération des produits
        console.log("Erreur lors de la récupération des produits.");
        console.log("Erreur : "+ error);
      });
  }
}
