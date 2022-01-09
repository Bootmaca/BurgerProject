import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produit-personnalisation',
  templateUrl: './produit-personnalisation.component.html',
  styleUrls: ['./produit-personnalisation.component.css']
})
export class ProduitPersonnalisationComponent implements OnInit {
  baseUrlImage : string = "../../../assets/images/";


  @Input() nom: string = "";
  @Input() prix: number = 0;
  @Input() urlImage: string = "" ;

  constructor() { }

  ngOnInit(): void {
    this.urlImage = this.baseUrlImage + this.urlImage;
  }

}
