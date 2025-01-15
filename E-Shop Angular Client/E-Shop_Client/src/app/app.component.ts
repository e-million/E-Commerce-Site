import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroHomeComponent } from './components/Pages/Home-Page/hero-home/hero-home.component';
import { FeaturedProductsComponent } from './components/Pages/Home-Page/featured-products/featured-products.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, HeroHomeComponent,
    FeaturedProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Shop_Client';


}
