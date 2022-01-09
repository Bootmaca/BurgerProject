import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {AuthGuardCustomerService} from "./services/auth-guard-customer.service";
import {ClientComponent} from "./client/client.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {PanierComponent} from "./client/panier/panier.component";
import {CarteComponent} from "./client/carte/carte.component";
import {CarteAdminComponent} from "./administrateur/carte-admin/carte-admin.component";
import {PaiementComponent} from "./client/paiement/paiement.component";
import {AccueilComponent} from "./administrateur/accueil/accueil.component";
import {HistoriqueComponent} from "./administrateur/historique/historique.component";
import {CreationBurgerComponent} from "./client/creation-burger/creation-burger.component";

const routes: Routes = [
  {path:'auth', component : AuthentificationComponent},
  {path:'admin', canActivate : [AuthGuardAdminService], component: AdministrateurComponent,
    children:[
      {path: 'carte', canActivate : [AuthGuardAdminService], component: CarteAdminComponent},
      {path: 'accueil', canActivate : [AuthGuardAdminService], component: AccueilComponent},
      {path: 'historique', canActivate : [AuthGuardAdminService], component : HistoriqueComponent},
    ]
  },
  {path:'client',
    canActivate : [AuthGuardCustomerService],
    component : ClientComponent,
    children:[
      {path: 'carte', canActivate : [AuthGuardCustomerService], component: CarteComponent},
      {path: 'panier', canActivate : [AuthGuardCustomerService], component: PanierComponent},
      {path: 'paiement', canActivate : [AuthGuardCustomerService], component: PaiementComponent},
      {path: 'creer-burger', canActivate : [AuthGuardCustomerService], component: CreationBurgerComponent}
    ]
  },
  {path:'not-found', component : NotFoundComponent},
  {path:'', component : AuthentificationComponent},
  {path:'**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
