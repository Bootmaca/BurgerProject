import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  baseUrlImage : string = "../../../assets/images/";


  @Output() eventEmitterClickSurCarte = new EventEmitter<string>();
  @Input() numero : number = 1;
  @Input() id : number = 1;
  @Input() nom: string = "Menu n°1";
  @Input() prix: number = 10;
  @Input() urlImage: string = "../../../assets/images/petite_frite.png" ;
  @Input() nameBtn: string = "Commander" ;
  @Input() url: string = "1" ;

  constructor() { }

  ngOnInit(): void {
    this.urlImage = this.baseUrlImage + this.urlImage;
  }

  Clique(){
    this.eventEmitterClickSurCarte.emit();
  }

}
