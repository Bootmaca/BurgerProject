export class Produit{
  private _idProduit: number;
  private _libelle: string;
  private _prix: number;
  private _image: string;
  private _isDisponible: boolean;
  private _typeProduit: string;
  private _isByCreator: boolean;


  public constructor(idProduit: number, libelle: string, prix: number, image: string, isDisponible: boolean, typeProduit: string, isByCreator:boolean) {
    this._idProduit = idProduit;
    this._libelle = libelle;
    this._prix = prix;
    this._image = image;
    this._isDisponible = isDisponible;
    this._typeProduit = typeProduit;
    this._isByCreator = isByCreator;
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

  get isByCreator(): boolean{
    return this._isByCreator;
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

  set isByCreator(isByCreator : boolean){
    this._isByCreator = isByCreator;
  }
}
