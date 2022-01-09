import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Frite} from "../_models/Frite";
import {Dessert} from "../_models/Dessert";
import {Boisson} from "../_models/Boisson";
import {Autre} from "../_models/Autre";

@Injectable()
export class PanierService{
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/";
  isAjoute : boolean = false;
  isAjoute2 : boolean = false;
  lesFrites : Frite[] = [];
  lesDessert : Dessert[] = [];
  lesBoisson : Boisson[] = [];
  lesAutres : Autre[] = [];


  constructor(private http: HttpClient) {

  }

  ajouterProduit(idUtil: number, idProduit: number, typeProduit: string){
    this.http
      .get<any>(this.urlDeBase+'ajouterUnProduitAuPanier.php?idUtil='+idUtil+'&idProduit='+idProduit+'&typeProduit='+typeProduit) //Liens vers le script php permettant l'ajout du produit dans le panier
      .subscribe((laData) => {
        this.isAjoute = laData == "true";
      }, (error) => { //Si il y a une erreur lors de l'insertion
        console.log(error);
        this.isAjoute = false;
      });
  }

  ajouterBurger(idUtil: number, nomBurger: string, idPain: number, idViande : number, idSupplement: number, idSauce: number){
    this.http
      .get<any>(this.urlDeBase+'ajouterBurgerCreeAuPanier.php?idUtil='+idUtil+'&nomBurger='+nomBurger+'&idPain='+idPain+'&idViande='+idViande+'&idSupplement='+idSupplement+'&idSauce='+idSauce) //Liens vers le script php permettant l'ajout du produit dans le panier
      .subscribe((laData) => {
        this.isAjoute2 = laData == "true";
      }, (error) => { //Si il y a une erreur lors de l'insertion
        console.log(error);
        this.isAjoute2 = false;
      });
  }

  rechercherTousLesProduitsDuPanier(idUtil: number){
    this.lesFrites = [];
    this.lesBoisson = [];
    this.lesDessert = [];
    this.lesAutres = [];
    let lesProduits:any =[];
    this.http
      //Liens vers le script php permettant la selection des produits
      .get<any[]>(this.urlDeBase+'recupererContenuePanier.php?idUtil='+idUtil)
      .subscribe((laData) => {
        lesProduits = laData; //récupération des produits

        //Nombre de produits
        let nombreDeProduit = lesProduits.length;

        //Déclaration des variables
        let uneFrite :Frite;
        let unDessert :Dessert;
        let uneBoisson :Boisson;
        let unAutre :Autre;
        let idProduit;
        let libelle;
        let prix;
        let quantite;

        //Parcours de tous les produits
        //Pour chaque produit création d'un objet de type Produit et insertion dans le tableau touslesProduits
        for(let i=0; i<nombreDeProduit; i++){
          idProduit = lesProduits[i]["id"];
          libelle = lesProduits[i]["libelle"];
          prix = lesProduits[i]["prix"];
          quantite = lesProduits[i]["quantite"];
          switch(lesProduits[i]["typeProduit"]) {
            case 'frite': {
              uneFrite = new Frite(idProduit, libelle, prix, quantite); // Création de l'objet de type Frite
              this.lesFrites.push(uneFrite); // Insertion du produit dans le tableau
              break;
            }
            case 'dessert': {
              unDessert = new Dessert(idProduit, libelle, prix, quantite); // Création de l'objet de type Frite
              this.lesDessert.push(unDessert); // Insertion du produit dans le tableau
              break;
            }
            case 'boisson': {
              uneBoisson = new Boisson(idProduit, libelle, prix, quantite); // Création de l'objet de type Frite
              this.lesBoisson.push(uneBoisson); // Insertion du produit dans le tableau
              break;
            }
            case 'autre': {
              unAutre = new Autre(idProduit, libelle, prix, quantite); // Création de l'objet de type Frite
              this.lesAutres.push(unAutre); // Insertion du produit dans le tableau
              break;
            }
          }
        }

      }, (error) => { //Si il y a un problème lors de la récupération des produits
        console.log("Erreur lors de la récupération des produits.");
        console.log("Erreur : "+ error);
      });
  }
}
