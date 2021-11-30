import {Component, OnInit} from '@angular/core';
import {AuthServices} from "../services/auth.services";
import { HttpClient } from '@angular/common/http';
import {NgForm} from "@angular/forms";

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
  identificationFalse : boolean;
  title : string = "apprenant";
  urlDeBase : string = "http://localhost/burgerProject/src/app/_classes/"
  data = [];

  constructor(private authService: AuthServices, private http: HttpClient) {


     this.identificationFalse = this.authService.identificationFalse;
     this.http.get(this.urlDeBase+'test.php').subscribe((laData) => {
       // @ts-ignore
       this.data = laData;
       console.log(this.data);
       console.log(this.data[0]['prenom']);
     }, error => {
       console.log("Utilisateur non trouvé");
       //console.log(error);
     });
  }



  ngOnInit(): void {
  }

  seConnecter(form : NgForm){
    // let email = form.value['name'];
    console.log(form.value['testEmail']);
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
