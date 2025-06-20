import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderService } from './service/header.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isDarkMode$: Observable<boolean>;

  constructor(private headerService: HeaderService) {
    this.isDarkMode$ = this.headerService.isDarkMode$;
  }

  scrollToSection(sectionId: string) {
    this.headerService.scrollToSection(sectionId);
  }

  toggleTheme() {
    this.headerService.toggleTheme();
  }
}
