import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {AuthGuardCustomerService} from "./services/auth-guard-customer.service";
import {ClientComponent} from "./client/client.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FritesComponent} from "./client/frites/frites.component";
import {BurgersComponent} from "./client/burgers/burgers.component";
import {DessertsComponent} from "./client/desserts/desserts.component";
import {MenuComponent} from "./client/menu/menu.component";
import {BoissonsComponent} from "./client/boissons/boissons.component";
import {SupplementsComponent} from "./client/supplements/supplements.component";
import {PanierComponent} from "./client/panier/panier.component";
import {CreationBurgerComponent} from "./client/creation-burger/creation-burger.component";
import {CarteComponent} from "./client/carte/carte.component";
import {PaiementComponent} from "./client/paiement/paiement.component";

const routes: Routes = [
  {path:'auth', component : AuthentificationComponent},
  {path:'admin', canActivate : [AuthGuardAdminService], component : AdministrateurComponent},
  {path:'client',
    canActivate : [AuthGuardCustomerService],
    component : ClientComponent,
    children:[
      {path: 'carte', canActivate : [AuthGuardCustomerService], component: CarteComponent},
      {path: 'panier', canActivate : [AuthGuardCustomerService], component: PanierComponent},
      {path: 'paiement', canActivate : [AuthGuardCustomerService], component: PaiementComponent}
    ]},
  {path: 'client/burgers', canActivate : [AuthGuardCustomerService], component: BurgersComponent},
  {path: 'client/frites', canActivate : [AuthGuardCustomerService], component: FritesComponent},
  {path: 'client/desserts', canActivate : [AuthGuardCustomerService], component: DessertsComponent},
  {path: 'client/menu', canActivate : [AuthGuardCustomerService], component: MenuComponent},
  {path: 'client/boissons', canActivate : [AuthGuardCustomerService], component: BoissonsComponent},
  {path: 'client/supplements', canActivate : [AuthGuardCustomerService], component: SupplementsComponent},
  {path: 'client/creation-burger', canActivate : [AuthGuardCustomerService], component : CreationBurgerComponent},
  {path:'not-found', component : NotFoundComponent},
  {path:'', component : AuthentificationComponent},
  {path:'**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
