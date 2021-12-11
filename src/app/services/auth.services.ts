import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Utilisateur} from "src/app/_models/Utilisateur";

@Injectable()
export class AuthServices{
  // localStorage.setItem("token", token);
  // localStorage.getItem("token"); //returns "xxx"
  isAuth : string = "";
  identificationFalse : boolean = false;
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/"
  user:any =[];
  unUtilisateur: Utilisateur = new Utilisateur("nom", "prenom", "mail", "autre");
  unUtilisateur2: Utilisateur = new Utilisateur("","", "", "");

  constructor(private http: HttpClient) {
    if(!localStorage.getItem("utilisateur")){
      //localStorage.setItem("token2", Utilisateur);
      console.log(localStorage.getItem("token2"));
    }else{
      //console.log(localStorage.getItem("token"));
    }
    console.log(this.unUtilisateur.getNom());
  }


  signIn(mail: String, password: String){
    console.log(mail);
    console.log(password);

    this.http
      .get<any[]>(this.urlDeBase+'getUnUtilisateur.php?email='+mail+'&password='+password)
      .subscribe((laData) => {
        this.user = laData;
        if(this.user[0]['typeUtil'] == 1){
          this.isAuth = "admin";
        }else{
          this.isAuth = "client";
        }
        this.identificationFalse = false;
      }, (error) => {
        console.log("Utilisateur non trouvé. Erreur : " + error);
        this.identificationFalse = true;
        this.isAuth = "";
      });
  }


  signOut(){
    this.isAuth = "";
  }
}
