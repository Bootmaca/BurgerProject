import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Utilisateur} from "src/app/_models/Utilisateur";

@Injectable()
export class AuthServices{
  identificationFalse : boolean = false;
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/"
  user:any =[];
  utilisateur: Utilisateur = new Utilisateur("","", "", "");

  constructor(private http: HttpClient) {
    if(!sessionStorage.getItem("utilisateur")){
      sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
    }
  }


  signIn(mail: string, password: string){

    this.http
      .get<any[]>(this.urlDeBase+'getUnUtilisateur.php?email='+mail+'&password='+password)
      .subscribe((laData) => {
        this.user = laData;
        let typeUtil : string = "client";
        if(this.user[0]['typeUtil'] == 1){
          typeUtil = "admin";
        }
        this.utilisateur = new Utilisateur(this.user[0]['nom'], this.user[0]['prenom'], mail, typeUtil);
        sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur)); //Garde en session l'utilisateur
        this.identificationFalse = false;
      }, (error) => {
        console.log("Utilisateur non trouvé. Erreur : " + error);
        this.identificationFalse = true;
        this.utilisateur = new Utilisateur(this.user[0]['nom'], this.user[0]['prenom'], mail, "");
        sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
      });
  }


  signOut(){
    this.utilisateur = new Utilisateur("","", "", "");
    sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
  }
}
