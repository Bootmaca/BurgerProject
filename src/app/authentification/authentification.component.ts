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
  identificationFalse : boolean = false;
  data = [];

  constructor(private authService: AuthServices, private router: Router) {  }



  ngOnInit(): void {
  }

  seConnecter(form : NgForm){
    let mail = form.value['mail'];
    let password = form.value['password'];
    form.reset();
    this.authService.signIn(mail, password);
    //On crée une promise pour le temps de récupération de données
    new Promise(
      () => {
        setTimeout(
          ()=>{
            let user:any = sessionStorage.getItem("utilisateur");
            user = JSON.parse(user);
            //Récupération du type utilisateur récupéré
            if(user['typeUtil'] != "") {
              if(this.authService.user[0]['typeUtil'] == 1){
                this.router.navigate(['/admin']);
              }else{
                this.router.navigate(['/client/menu']);
              }
            }else{
              this.identificationFalse = true;
            }
          },200
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
}
