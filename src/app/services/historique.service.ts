import { Injectable } from '@angular/core';
import {Commande} from "../_models/Commande";
import {obj_commande,menu_commande} from "../_models/Panier_visu";
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  private url = 'http://localhost/burgerProject/src/app/_php/';

  constructor(private http: HttpClient) { }

  getAllCommande(): Observable<Commande[]>{
    // cherche toutes les commandes et retourne un json avec idPanier,nom+prenom,prix,date
    return this.http.get<Commande[]>(this.url+"Historiquelst.php");
  }

  getBurger( id:number){
    return this.http.get<obj_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Burger");
  }
  getBoisson( id:number){
    return this.http.get<obj_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Boisson");
  }
  getFrites( id:number){
    return this.http.get<obj_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Frite");
  }
  getAutre( id:number){
    return this.http.get<obj_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Autre");
  }
  getDessert( id:number){
    return this.http.get<obj_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Dessert");
  }
  getMenu( id:number){
    return this.http.get<menu_commande[]>(this.url+"item_id_categorie"+"?id="+id+"&categorie=Menu");
  }
}
