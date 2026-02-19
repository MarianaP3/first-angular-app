import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ContentComponent } from './components/content/content/content.component';
import { HeaderComponent } from './components/header/header/header.component';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'APP-PRUEBA';
}
