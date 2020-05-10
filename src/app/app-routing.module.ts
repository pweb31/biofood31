import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduitlegumeComponent } from './produits/produitlegume/produitlegume.component';
import { ProduitpainComponent } from './produits/produitpain/produitpain.component';
import { ProduitviandeComponent } from './produits/produitviande/produitviande.component';
import { ProduitfromageComponent } from './produits/produitfromage/produitfromage.component';


const routes: Routes = [
  { path: "", component: HomeComponent }, //http://localhost:4200
  { path: "home", component: HomeComponent },//http://localhost:4200/home
  { path: "panier", component: PanierComponent },//http://localhost:4200/panier
  { path: "panier", component: PagenotfoundComponent },//http://localhost:4200/wrongurl
  { path: "legumes/:id", component: ProduitlegumeComponent },
  { path: "pains/:id", component: ProduitpainComponent },
  { path: "viandes/:id", component: ProduitviandeComponent },
  { path: "fromages/:id", component: ProduitfromageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
