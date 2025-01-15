import { Component } from '@angular/core';
import { FeaturedProductsComponent } from '../Components/featured-products/featured-products.component';
import { HeroHomeComponent } from '../Components/hero-home/hero-home.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroHomeComponent, FeaturedProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
