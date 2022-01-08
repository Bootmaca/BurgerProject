import {Component, OnInit} from '@angular/core';
import {AuthServices} from "../services/auth.services";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  marginLeft : string = "0";
  marginLeftTitre : string = "0";
  sliderBar : string = "0";
  colorLogin : string = "#fff";
  colorSignup : string = "#000";
  curseurLogin : string = "default";
  curseurSignup : string = "pointer";
  reponseInscription :string = "";
  identificationFalse : boolean = false;
  inscriptionFalse : boolean = false;
  affichSucceedInscription : boolean = false;
  data = [];

  constructor(private authService: AuthServices, private router: Router) {  }



  ngOnInit(): void {
  }

  seConnecter(form : NgForm){
    let mail = form.value['mail'];
    let password = form.value['password'];
    this.authService.signIn(mail, password);
    //On crée une promise pour le temps de récupération de données
    new Promise(
      () => {
        setTimeout(
          ()=>{
            let user:any = sessionStorage.getItem("utilisateur");
            user = JSON.parse(user);
            // Récupération du type de l'utilisateur récupéré
            if(user['typeUtil'] != "") {
              this.identificationFalse = true;
              form.reset(); // Reset le formulaire
              if(this.authService.user[0]['typeUtil'] == 1){
                //Type de produit affiché en premier
                let typeProduit = "Burger";

                sessionStorage.setItem("typeProduit",typeProduit);
                this.router.navigate(['/admin/accueil']); // Navigation vers la page admin
              }else{
                //Type de produit affiché en premier
                let typeProduit = "Burger";

                sessionStorage.setItem("typeProduit",typeProduit);
                this.router.navigate(['/client/carte']); // Navigation vers la page client
              }
            }else{
              this.identificationFalse = true;
            }
          },500
        )
      }
    );

    //this.authService
  }

  Inscription(form : NgForm){
    let prenom = form.value['prenom']; //Récupération du prenom dans le formulaire
    let nom = form.value['nom']; //Récupération du nom dans le formulaire
    let mail = form.value['mail']; //Récupération du mail dans le formulaire
    let password = form.value['password']; //Récupération du mot de passe dans le formulaire
    this.authService.registration(prenom, nom, mail, password); //Appel de la fonction registration du service auth
    // //On crée une promise pour le temps de récupération de données
    new Promise(
      () => {
        setTimeout(
          ()=>{
            //récupération de la variable reponseInscription dans le service auth
            this.reponseInscription = this.authService.reponseInscription
            if(this.reponseInscription == "Inséré") { //Si la ligne à été inséré
              this.inscriptionFalse = false;
              form.reset(); //reset le formulaire
              this.onSignIn();
              this.affichSucceedInscription=true;
              new Promise(
                () => {
                  setTimeout(
                    ()=>{
                      this.affichSucceedInscription=false;
                    },3000
                  )
                }
              );
            }else{
              this.inscriptionFalse = true;
            }
          },500
        )
      }
    );

    //this.authService
  }


  onSignup(){
    this.marginLeft = "-50%";
    this.marginLeftTitre = "-100%";
    this.sliderBar = "50%";
    this.colorLogin = "#000";
    this.colorSignup = "#fff";
    this.curseurLogin = "pointer";
    this.curseurSignup = "default";
  }

  onSignIn(){
    this.marginLeft = "0";
    this.marginLeftTitre = "0";
    this.sliderBar = "0";
    this.colorLogin = "#fff";
    this.colorSignup = "#000";
    this.curseurLogin = "default";
    this.curseurSignup = "pointer";
  }

  stopAffichSucceedInscription(){
    this.affichSucceedInscription = false;
  }
}
