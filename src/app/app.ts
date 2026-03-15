import { Component, signal } from '@angular/core';
import { MenuBar } from "./components/menu-bar/menu-bar";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [MenuBar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-psn-store');
}
