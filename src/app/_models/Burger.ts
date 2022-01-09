export class Burger{
  private _idBurger: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;
  private _typePain: string;
  private _libelleViande: string;
  private _libelleSauce: string;
  private _supplement : string[];


  public constructor(idBurger: number, libelle: string, prix: number, quantite:number, typePain: string, libelleViande:string, libelleSauce:string, supplement: string[]) {
    this._idBurger = idBurger;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
    this._typePain = typePain;
    this._libelleViande = libelleViande;
    this._libelleSauce = libelleSauce;
    this._supplement = supplement;
  }

  /***** Getter *****/

  get idBurger(): number {
    return this._idBurger;
  }

  get libelle(): string {
    return this._libelle;
  }

  get prix(): number {
    return this._prix;
  }

  get quantite(): number {
    return this._quantite;
  }

  get typePain(): string {
    return this._typePain;
  }

  get libelleViande(): string {
    return this._libelleViande;
  }

  get libelleSauce(): string {
    return this._libelleSauce;
  }

  get supplement(): string[] {
    return this._supplement;
  }

  /***** Setter *****/


  set idBurger(value: number) {
    this._idBurger = value;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  set prix(value: number) {
    this._prix = value;
  }

  set quantite(value: number) {
    this._quantite = value;
  }

  set typePain(value: string) {
    this._typePain = value;
  }

  set libelleViande(value: string) {
    this._libelleViande = value;
  }

  set libelleSauce(value: string) {
    this._libelleSauce = value;
  }

  set supplement(value: string[]) {
    this._supplement = value;
  }
}
