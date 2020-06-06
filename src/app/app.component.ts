import { Component } from '@angular/core';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bioFood31';
  logo = 'assets/logo2.png';
  panier = 0;

  constructor(private panierService: PanierService) {
  	this.panier = this.panierService.getCartCount();
  }

  ngOnInit(): void {
  	setInterval(() => {
      this.panier = this.panierService.getCartCount();
    }, 200);
  }
}
