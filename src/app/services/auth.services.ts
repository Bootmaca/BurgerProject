import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Utilisateur} from "src/app/_models/Utilisateur";

@Injectable()
export class AuthServices{
  isAuth : string = "";
  identificationFalse : boolean = false;
  urlDeBase : string = "http://localhost/burgerProject/src/app/_classes/"
  user:any =[];
  unUtilisateur: Utilisateur = new Utilisateur("prenom", "prenom", "mail", "autre");
  unUtilisateur2: Utilisateur = new Utilisateur("","", "", "");

  constructor(private http: HttpClient) {
    console.log(this.unUtilisateur.getNom());
  }


  signIn(mail: String, password: String){
    console.log(mail);
    console.log(password);

    this.http
      .get<any[]>(this.urlDeBase+'test.php?email='+mail+'&password='+password)
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
