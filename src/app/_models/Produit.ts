export class Produit{
  private _idProduit: number;
  private _libelle: string;
  private _prix: number;
  private _image: string;
  private _isDisponible: boolean;
  private _typeProduit: string;


  public constructor(idProduit: number, libelle: string, prix: number, image: string, isDisponible: boolean, typeProduit: string ) {
    this._idProduit = idProduit;
    this._libelle = libelle;
    this._prix = prix;
    this._image = image;
    this._isDisponible = isDisponible;
    this._typeProduit = typeProduit;
  }


  /***** Getter *****/
  get idProduit(): number {
    return this._idProduit;
  }

  get libelle(): string{
    return this._libelle;
  }

  get prix(): number {
    return this._prix;
  }

  get image(): string {
    return this._image;
  }

  get isDisponible(): boolean {
    return this._isDisponible;
  }

  get typeProduit(): string {
    return this._typeProduit;
  }


  /***** Setter *****/
  set idProduit(idProduit: number) {
    this._idProduit = idProduit;
  }

  set prix(prix: number) {
    this._prix = prix;
  }

  set libelle(libelle: string){
    this._libelle = libelle;
  }

  set image(image: string) {
    this._image = image;
  }

  set isDisponible(isDisponible: boolean) {
    this._isDisponible = isDisponible;
  }

  set typeProduit(typeProduit: string) {
    this._typeProduit = typeProduit;
  }
}
