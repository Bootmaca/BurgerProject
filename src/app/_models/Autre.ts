export class Autre{
  private _idAutre: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;


  public constructor(idAutre: number, libelle: string, prix: number, quantite:number) {
    this._idAutre = idAutre;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
  }

  /***** Getter *****/
  get idAutre(): number {
    return this._idAutre;
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
  set idAutre(idAutre: number) {
    this._idAutre = idAutre;
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
