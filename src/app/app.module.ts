import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UtilisateurComponent } from './client/utilisateur.component';
import { FritesComponent } from './client/frites/frites.component';
import { BurgersComponent } from './client/burgers/burgers.component';
import { BoissonsComponent } from './client/boissons/boissons.component';
import { CreationBurgerComponent} from './client/creation-burger/creation-burger.component';
import { DessertsComponent } from './client/desserts/desserts.component';
import { MenuComponent } from './client/menu/menu.component';
import { PanierComponent } from './client/panier/panier.component';
import { SupplementsComponent } from './client/supplements/supplements.component';
import {AuthServices} from "./services/auth.services";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AuthGuardCustomerService} from "./services/auth-guard-customer.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {Utilisateur} from 'src/app/_models/Utilisateur';
import { EnteteClientComponent } from './client/entete-client/entete-client.component';
import { PiedPageClientComponent } from './client/pied-page-client/pied-page-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AdministrateurComponent,
    UtilisateurComponent,
    BoissonsComponent,
    BurgersComponent,
    CreationBurgerComponent,
    DessertsComponent,
    FritesComponent,
    MenuComponent,
    PanierComponent,
    SupplementsComponent,
    NotFoundComponent,
    EnteteClientComponent,
    PiedPageClientComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
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
