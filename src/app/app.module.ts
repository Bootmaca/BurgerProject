import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {AuthServices} from "./services/auth.services";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AuthGuardUtilService} from "./services/auth-guard-util.service";
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes : Routes = [
  {path:'auth', component : AuthentificationComponent},
  {path:'admin', canActivate : [AuthGuardAdminService], component : AdministrateurComponent},
  {path:'util', canActivate : [AuthGuardUtilService], component : UtilisateurComponent},
  {path:'not-found', component : NotFoundComponent},
  {path:'', component : AuthentificationComponent},
  {path:'**', redirectTo : 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AdministrateurComponent,
    UtilisateurComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthServices,
    AuthGuardAdminService,
    AuthGuardUtilService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
