import { Injectable } from '@angular/core';
import {Commande} from "../_models/Commande";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  private CommandeUrl = 'http://localhost/burgerProject/src/app/_php/Historiquelst.php';



  getAllCommande(): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.CommandeUrl);
  }

  constructor(
    private http: HttpClient

  ) { }
}
