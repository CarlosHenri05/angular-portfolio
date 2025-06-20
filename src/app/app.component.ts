import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  isDarkTheme = false;

  toggleTheme(isDark: boolean) {
    const body = document.body;
    body.classList.remove(isDark ? 'light' : 'dark');
    body.classList.add(isDark ? 'dark' : 'light');
  }

  ngOnInit() {
    document.body.classList.add('dark');
  }
}
