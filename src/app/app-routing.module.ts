import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduitlegumeComponent } from './produits/produitlegume/produitlegume.component';
import { ProduitpainComponent } from './produits/produitpain/produitpain.component';
import { ProduitviandeComponent } from './produits/produitviande/produitviande.component';
import { ProduitfromageComponent } from './produits/produitfromage/produitfromage.component';
import { AchattermineComponent } from './achattermine/achattermine.component';


const routes: Routes = [
  { path: "legumes/:id", component: ProduitlegumeComponent },
  { path: "pains/:id", component: ProduitpainComponent },
  { path: "viandes/:id", component: ProduitviandeComponent },
  { path: "fromages/:id", component: ProduitfromageComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "panier", component: PanierComponent },
  { path: "achatterminer", component: AchattermineComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
