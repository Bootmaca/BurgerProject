import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  @Input() id : number = 1;
  @Input() nom: string = "Menu n°1";
  @Input() prix: number = 10;
  @Input() urlImage: string = "../../../assets/images/petite_frite.png" ;

  constructor() { }

  ngOnInit(): void {
  }

}
