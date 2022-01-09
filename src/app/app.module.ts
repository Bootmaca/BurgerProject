import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './client/client.component';
import { CreationBurgerComponent} from './client/creation-burger/creation-burger.component';
import { PanierComponent } from './client/panier/panier.component';
import { AuthServices } from "./services/auth.services";
import { AuthGuardAdminService } from "./services/auth-guard-admin.service";
import { AuthGuardCustomerService } from "./services/auth-guard-customer.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarteComponent } from './client/carte/carte.component';
import { ProduitComponent } from './client/carte/produit/produit.component';
import { NavBarProduitComponent } from './client/carte/nav-bar-produit/nav-bar-produit.component';
import { CarteService } from "./services/carte.services";
import { BarreRechercheComponent } from './client/carte/barre-recherche/barre-recherche.component';
import { PaiementComponent } from './client/paiement/paiement.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarEnteteComponent } from './nav-bar-entete/nav-bar-entete.component';
import {PanierService} from "./services/panier.services";
import { CarteAdminComponent } from './administrateur/carte-admin/carte-admin.component';
import { BarreRechercheAdminComponent } from './administrateur/carte-admin/barre-recherche-admin/barre-recherche-admin.component';
import { NavBarProduitAdminComponent } from './administrateur/carte-admin/nav-bar-produit-admin/nav-bar-produit-admin.component';
import { ProduitAdminComponent } from './administrateur/carte-admin/produit-admin/produit-admin.component';
import { AccueilComponent } from './administrateur/accueil/accueil.component';
import { SearchfiltrePipe } from './pipe/searchfiltre.pipe';
import { HistoriqueComponent } from './administrateur/historique/historique.component';
import { DialogPanierComponent } from './administrateur/historique/dialog-panier/dialog-panier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ProduitPersonnalisationComponent } from './client/creation-burger/produit-personnalisation/produit-personnalisation.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AdministrateurComponent,
    ClientComponent,
    CreationBurgerComponent,
    PanierComponent,
    NotFoundComponent,
    CarteComponent,
    ProduitComponent,
    NavBarProduitComponent,
    BarreRechercheComponent,
    PaiementComponent,
    NavBarEnteteComponent,
    CarteAdminComponent,
    BarreRechercheAdminComponent,
    NavBarProduitAdminComponent,
    ProduitAdminComponent,
    AccueilComponent,
    SearchfiltrePipe,
    HistoriqueComponent,
    DialogPanierComponent,
    ProduitPersonnalisationComponent
  ],
  entryComponents: [
    DialogPanierComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule

  ],
  providers: [
    AuthGuardAdminService,
    AuthServices,
    CarteService,
    PanierService,
    AuthGuardCustomerService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
