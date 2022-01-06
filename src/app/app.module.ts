import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { ClientComponent } from './client/client.component';
import { FritesComponent } from './client/frites/frites.component';
import { BurgersComponent } from './client/burgers/burgers.component';
import { BoissonsComponent } from './client/boissons/boissons.component';
import { CreationBurgerComponent} from './client/creation-burger/creation-burger.component';
import { DessertsComponent } from './client/desserts/desserts.component';
import { MenuComponent } from './client/menu/menu.component';
import { PanierComponent } from './client/panier/panier.component';
import { SupplementsComponent } from './client/supplements/supplements.component';
import { AuthServices } from "./services/auth.services";
import { AuthGuardAdminService } from "./services/auth-guard-admin.service";
import { AuthGuardCustomerService } from "./services/auth-guard-customer.service";
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EnteteClientComponent } from './client/entete-client/entete-client.component';
import { PiedPageClientComponent } from './client/pied-page-client/pied-page-client.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    AdministrateurComponent,
    ClientComponent,
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
    PiedPageClientComponent,
    CarteComponent,
    ProduitComponent,
    NavBarProduitComponent,
    BarreRechercheComponent,
    PaiementComponent,
    NavBarEnteteComponent,
    CarteAdminComponent,
    BarreRechercheAdminComponent,
    NavBarProduitAdminComponent,
    ProduitAdminComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule
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
