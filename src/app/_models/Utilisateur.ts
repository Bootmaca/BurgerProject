export class Utilisateur{
  private idUtil: number;
  private nom: string;
  private prenom: string;
  private mail: string;
  private typeUtil: string;

  // public constructor()
  // public constructor(nom?: string, prenom?: string, mail?: string, typeUtil?: string ) {
  //   if(!nom|| !prenom || !mail || !typeUtil){
  //     this.nom = "";
  //     this.prenom = "";
  //     this.mail = "";
  //     this.typeUtil = "";
  //   }else{
  //     this.nom = nom;
  //     this.prenom = prenom;
  //     this.mail = mail;
  //     this.typeUtil = typeUtil;
  //   }
  // }

  public constructor(idUtil: number, nom: string, prenom: string, mail: string, typeUtil: string ) {
    this.idUtil = idUtil;
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.typeUtil = typeUtil;
  }


}
