import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component'; // Import the HeroComponent
import { HeaderComponent } from './components/header/header.component'; // Import the HeroComponent
import { ServicesComponent } from './components/services/services.component'; // Import the HeroComponent
import { CallToActionComponent } from './components/call-to-action/call-to-action.component'; // Import the HeroComponent
import { FooterComponent } from './components/footer/footer.component'; // Import the HeroComponent


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, HeaderComponent, ServicesComponent, CallToActionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance-page';
}
