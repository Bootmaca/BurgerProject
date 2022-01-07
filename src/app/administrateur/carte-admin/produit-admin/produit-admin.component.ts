import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produit-admin',
  templateUrl: './produit-admin.component.html',
  styleUrls: ['./produit-admin.component.css']
})
export class ProduitAdminComponent implements OnInit {
  baseUrlImage : string = "../../../assets/images/";
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;


  @Output() eventEmitterModifierProduit = new EventEmitter<string>();
  @Output() eventEmitterSupprimerProduit = new EventEmitter<string>();
  @Input() nom: string = "Menu n°1";
  @Input() prix: number = 10;
  @Input() urlImage: string = "../../../assets/images/petite_frite.png" ;

  constructor() { }

  ngOnInit(): void {
    this.urlImage = this.baseUrlImage + this.urlImage;
  }

  modifier(){
    this.eventEmitterModifierProduit.emit();
  }

  supprimer(){
    this.eventEmitterSupprimerProduit.emit();
  }

}
