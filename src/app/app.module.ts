import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UtilisateurComponent } from './client/utilisateur.component';
import {AuthServices} from "./services/auth.services";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AuthGuardCustomerService} from "./services/auth-guard-customer.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {Utilisateur} from 'src/app/_models/Utilisateur';

const appRoutes : Routes = [
  {path:'auth', component : AuthentificationComponent},
  {path:'admin', canActivate : [AuthGuardAdminService], component : AdministrateurComponent},
  {path:'client', canActivate : [AuthGuardCustomerService], component : UtilisateurComponent},
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
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardAdminService,
    AuthServices,
    //HttpClient,
    //HttpHeaders,
    AuthGuardCustomerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
