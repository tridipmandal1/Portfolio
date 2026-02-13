import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AlertComponent} from "./components/alert/alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
