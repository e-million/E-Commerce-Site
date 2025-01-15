import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/Pages/Home-Page/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [ NavbarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Shop_Client';


}
