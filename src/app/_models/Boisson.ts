export class Boisson{
  private _idBoisson: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;


  public constructor(idBoisson: number, libelle: string, prix: number, quantite:number) {
    this._idBoisson = idBoisson;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
  }

  /***** Getter *****/
  get idBoisson(): number {
    return this._idBoisson;
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
  set idBoisson(idBoisson: number) {
    this._idBoisson = idBoisson;
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
