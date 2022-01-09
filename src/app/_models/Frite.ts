export class Frite{
  private _idFrite: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;


  public constructor(idFrite: number, libelle: string, prix: number, quantite:number) {
    this._idFrite = idFrite;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
  }

  /***** Getter *****/
  get idFrite(): number {
    return this._idFrite;
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
  set idFrite(idFrite: number) {
    this._idFrite = idFrite;
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
