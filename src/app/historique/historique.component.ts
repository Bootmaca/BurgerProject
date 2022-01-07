import {Component, OnDestroy, OnInit} from '@angular/core';
import {Commande} from "../_models/Commande";
import {HistoriqueService} from "../services/historique.service";
import {obj_commande,menu_commande} from "../_models/Panier_visu";
import {MatDialog} from "@angular/material/dialog";
import {DialogPanierComponent} from "../dialog-panier/dialog-panier.component";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit,OnDestroy {
  DonneeBase$: Commande[]=[];
  Donnee$ : any ;
  recherche: string="";
  burger$ :obj_commande[]=[];
  boisson$:obj_commande[]=[];
  frite$: obj_commande[]=[];
  dessert$ : obj_commande[]=[];
  autre$:obj_commande[]=[];
  menu$:menu_commande[]=[];


  getAllCommande(): void {
    //on met toutes les commandes du service en courant du composant
     this.HistoriqueService.getAllCommande()
      .subscribe( Data => this.DonneeBase$ = Data);

  }
  onSelect(id:any){
    this.HistoriqueService.getBurger(id).subscribe(Data => this.burger$ = Data);
   this.HistoriqueService.getBoisson(id).subscribe(Data =>  this.boisson$ = Data);
    this.HistoriqueService.getFrites(id).subscribe(Data => this.frite$ = Data);
    this.HistoriqueService.getDessert(id).subscribe(Data => this.dessert$ = Data);
   this.HistoriqueService.getAutre(id).subscribe(Data =>  this.autre$ = Data);
    this.HistoriqueService.getMenu(id).subscribe(Data => this.menu$ = Data);
    let dialogref = this.matDialog.open(DialogPanierComponent,
      {
      data :{
        menu : this.menu$,
        burger : this.burger$,
        frite : this.frite$,
        boisson : this.boisson$,
        dessert : this.dessert$,
        autre : this.autre$
      }

      ,

      height: '500px',
      width: '500px',

    },

    )
  }

  constructor( private HistoriqueService: HistoriqueService,private matDialog : MatDialog) { }

  ngOnInit(): void {
    this.getAllCommande();
    this.HistoriqueService.getBurger(0).subscribe(Data => this.burger$ = Data);
    this.HistoriqueService.getBoisson(0).subscribe(Data =>  this.boisson$ = Data);
    this.HistoriqueService.getFrites(0).subscribe(Data => this.frite$ = Data);
    this.HistoriqueService.getDessert(0).subscribe(Data => this.dessert$ = Data);
    this.HistoriqueService.getAutre(0).subscribe(Data =>  this.autre$ = Data);
    this.HistoriqueService.getMenu(0).subscribe(Data => this.menu$ = Data);
  }

  ngOnDestroy(){
    this.Donnee$.unsubscribe();
  }

}

