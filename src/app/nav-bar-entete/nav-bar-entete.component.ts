import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import {AuthServices} from "../services/auth.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar-entete',
  templateUrl: './nav-bar-entete.component.html',
  styleUrls: ['./nav-bar-entete.component.css']
})
export class NavBarEnteteComponent implements OnInit {
  nom : string = "";
  prenom : string = "";
  faPowerOff = faPowerOff;

  constructor(private authService : AuthServices, private router: Router) {
    let user:any = sessionStorage.getItem("utilisateur");
    user = JSON.parse(user);
    this.nom = user['nom'];
    this.prenom = user['prenom'];
  }

  ngOnInit(): void {
  }

  seDeconnecter(){
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }

  Accueil(){
    if (this.router.url.startsWith("/client")) {
      this.router.navigate(['/client/carte']);
    }
  }

}
