import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeroHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Shop_Client';
}
