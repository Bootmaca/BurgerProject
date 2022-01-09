import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private router: Router) { }

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
