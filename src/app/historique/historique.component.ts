import { Component, OnInit } from '@angular/core';
import {Commande} from "../_models/Commande";
import {HistoriqueService} from "../services/historique.service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  DonneeBase: Commande[]=[];

  recherche: string="";


  getAllCommande(): void {

    this.HistoriqueService.getAllCommande()
      .subscribe( Data => this.DonneeBase = Data);

  }
  onSelect(date:any,prenom:any){
    console.log(date);
    console.log(prenom);
  }
  constructor( private HistoriqueService: HistoriqueService) { }

  ngOnInit(): void {
    this.getAllCommande();

  }

}

