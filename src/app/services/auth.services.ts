import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Utilisateur} from "src/app/_models/Utilisateur";

@Injectable()
export class AuthServices{
  urlDeBase : string = "http://localhost/burgerProject/src/app/_php/";
  reponseInscription:string = "";
  user:any =[];
  utilisateur: Utilisateur = new Utilisateur(0,"","", "", "");

  constructor(private http: HttpClient) {
    if(!sessionStorage.getItem("utilisateur")){
      sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
    }
  }


  //Connexion
  signIn(mail: string, password: string){

    this.http
      //Liens vers le script php permettant la selection de l'utilisateur
      .get<any[]>(this.urlDeBase+'getUnUtilisateur.php?email='+mail+'&password='+password)
      .subscribe((laData) => {
        this.user = laData; //récupération de l'utiisateur

        //Récupération du type d'utilisateur
        let typeUtil : string = "client";
        if(this.user[0]['typeUtil'] == 1){
          typeUtil = "admin";
        }

        //Création de l'utilisateur
        this.utilisateur = new Utilisateur(this.user[0]['idUtil'],this.user[0]['nom'], this.user[0]['prenom'], mail, typeUtil);

        //Garde en session l'utilisateur
        sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));

      }, () => { //Si l'utilisateur n'est pas trouvé
        //Création d'un utilisateur "vide" afin qu'il ne puisse pas naviguer ou il veut
        this.utilisateur = new Utilisateur(0,"","", "", "");

        //Mise en session de cette utilisateur
        sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
      });
  }

  //Inscription
  registration(prenom: string, nom:string, mail: string, password: string){
    this.http
      .get<any>(this.urlDeBase+'ajouterUnUtilisateur.php?prenom='+prenom+'&nom='+nom+'&email='+mail+'&password='+password) //Liens vers le script php permettant l'inscription
      .subscribe((laData) => {
        if(laData == "true"){//Si la ligne à été inséré
          this.reponseInscription = "Inséré";
        }else{//Si l'adresse mail est déjà utilisé
          this.reponseInscription = "Adresse mail déjà utilisé";
        }
      }, (error) => { //Si il y a une erreur lors de l'insertion
        console.log(error);
        this.reponseInscription = "Erreur lors de l'insertion veuillez réessayer dans quelque instant";
      });
  }

  //Déconnexion
  signOut(){
    //Création d'un utilisateur "vide" afin qu'il ne puisse pas naviguer ou il veut
    this.utilisateur = new Utilisateur(0, "","", "", "");

    //Mise en session de cette utilisateur
    sessionStorage.setItem("utilisateur", JSON.stringify(this.utilisateur));
  }
}


