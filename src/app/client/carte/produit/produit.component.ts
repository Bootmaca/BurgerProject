import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  baseUrlImage : string = "../../../assets/images/";


  @Input() id : number = 1;
  @Input() nom: string = "Menu n°1";
  @Input() prix: number = 10;
  @Input() urlImage: string = "../../../assets/images/petite_frite.png" ;
  @Input() url: string = "1" ;

  constructor() { }

  ngOnInit(): void {
    this.urlImage = this.baseUrlImage + this.urlImage;
  }

}
