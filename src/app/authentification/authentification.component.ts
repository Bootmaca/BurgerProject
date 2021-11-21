import {Component, OnInit} from '@angular/core';
import {AuthServices} from "../services/auth.services";

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

  constructor(private authService: AuthServices ) {
     this.identificationFalse = this.authService.identificationFalse;
  }



  ngOnInit(): void {
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
