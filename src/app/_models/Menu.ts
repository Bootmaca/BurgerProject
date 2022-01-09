export class Menu{
  private _idMenu: number;
  private _libelle: string;
  private _prix: number;
  private _quantite: number;
  private _idBurger: number;
  private _libelleBurger: string;
  private _typePain: string;
  private _libelleViande: string;
  private _libelleSauce: string;
  private _supplement : string[];
  private _libelleFrite: string;
  private _libelleBoisson: string;


  public constructor(idMenu: number, libelle: string, prix: number, quantite: number, idBurger: number, libelleBurger: string, typePain: string, libelleViande:string, libelleSauce:string, supplement: string[], libelleFrite: string, libelleBoisson: string) {
    this._idMenu = idMenu;
    this._libelle = libelle;
    this._prix = prix;
    this._quantite = quantite;
    this._idBurger = idBurger;
    this._libelleBurger = libelleBurger;
    this._typePain = typePain;
    this._libelleViande = libelleViande;
    this._libelleSauce = libelleSauce;
    this._supplement = supplement;
    this._libelleFrite = libelleFrite;
    this._libelleBoisson = libelleBoisson;
  }

  /***** Getter *****/

  get idMenu(): number {
    return this._idMenu;
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

  get idBurger(): number{
    return this._idBurger;
  }

  get libelleBurger(): string{
    return this._libelleBurger;
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

  get libelleFrite(): string{
    return this._libelleFrite;
  }

  get libelleBoisson(): string{
    return this._libelleBoisson;
  }

  /***** Setter *****/


  set idMenu(value: number) {
    this._idMenu = value;
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

  set idBurger(value: number){
    this._idBurger = value;
  }

  set libelleBurger(value: string){
    this._libelleBurger = value;
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

  set libelleFrite(value: string){
    this._libelleFrite = value;
  }

  set libelleBoisson(value: string){
    this._libelleBoisson = value;
  }
}
