import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class PanierService{
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/";
  isAjoute : boolean = false;


  constructor(private http: HttpClient) {

  }


  //Connexion
  rechercherTousLesProduits(idUtil: number, idProduit: number, typeProduit: string){
    this.http
      .get<any>(this.urlDeBase+'ajouterUnProduitAuPanier.php?idUtil='+idUtil+'&idProduit='+idProduit+'&typeProduit='+typeProduit) //Liens vers le script php permettant l'ajout du produit dans le panier
      .subscribe((laData) => {
        this.isAjoute = laData == "true";
      }, (error) => { //Si il y a une erreur lors de l'insertion
        console.log(error);
        this.isAjoute = false;
      });
  }
}
