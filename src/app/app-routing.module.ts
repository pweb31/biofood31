import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: "", component: HomeComponent }, //http://localhost:4200
  { path: "home", component: HomeComponent },//http://localhost:4200/home
  { path: "panier", component: PanierComponent },//http://localhost:4200/panier
  { path: "panier", component: PagenotfoundComponent },//http://localhost:4200/wrongurl
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
