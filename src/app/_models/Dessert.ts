export class Dessert{
  private _idDessert: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;


  public constructor(idDessert: number, libelle: string, prix: number, quantite:number) {
    this._idDessert = idDessert;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
  }

  /***** Getter *****/
  get idDessert(): number {
    return this._idDessert;
  }

  get libelle(): string{
    return this._libelle;
  }

  get prix(): number {
    return this._prix;
  }

  get quantite(): number {
    return this._quantite;
  }


  /***** Setter *****/
  set idDessert(idDessert: number) {
    this._idDessert = idDessert;
  }

  set libelle(libelle: string){
    this._libelle = libelle;
  }

  set prix(prix: number) {
    this._prix = prix;
  }

  set quantite(quantite: number) {
    this._quantite = quantite;
  }
}
