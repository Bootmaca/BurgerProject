import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";
import {AuthGuardAdminService} from "./services/auth-guard-admin.service";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {AuthGuardCustomerService} from "./services/auth-guard-customer.service";
import {UtilisateurComponent} from "./client/utilisateur.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {FritesComponent} from "./client/frites/frites.component";
import {BurgersComponent} from "./client/burgers/burgers.component";
import {DessertsComponent} from "./client/desserts/desserts.component";
import {MenuComponent} from "./client/menu/menu.component";
import {BoissonsComponent} from "./client/boissons/boissons.component";
import {SupplementsComponent} from "./client/supplements/supplements.component";
import {PanierComponent} from "./client/panier/panier.component";
import {CreationBurgerComponent} from "./client/creation-burger/creation-burger.component";

const routes: Routes = [
  {path:'auth', component : AuthentificationComponent},
  {path:'admin', canActivate : [AuthGuardAdminService], component : AdministrateurComponent},
  {path:'client', canActivate : [AuthGuardCustomerService], component : UtilisateurComponent},
  {path: 'client/burgers', component: BurgersComponent},
  {path: 'client/frites', component: FritesComponent},
  {path: 'client/desserts', component: DessertsComponent},
  {path: 'client/menu', component: MenuComponent},
  {path: 'client/boissons', component: BoissonsComponent},
  {path: 'client/supplements', component: SupplementsComponent},
  {path: 'client/panier', component: PanierComponent},
  {path: 'client/creation-burger', component : CreationBurgerComponent},
  {path:'not-found', component : NotFoundComponent},
  {path:'', component : AuthentificationComponent},
  //{path:'**', redirectTo : 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
