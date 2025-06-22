import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewEncapsulation } from '@angular/core';
import { StackComponent } from './stack/stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { Subscription } from 'rxjs';
import { HeaderService } from './header/service/header.service';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainPageComponent,
    StackComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Carlos Henrique - Portfolio';

  private scrollSubscription: Subscription;

  constructor(private readonly headerService: HeaderService) {}

  isDarkTheme = false;

  toggleTheme(isDark: boolean) {
    const body = document.body;
    body.classList.remove(isDark ? 'light' : 'dark');
    body.classList.add(isDark ? 'dark' : 'light');
  }

  ngOnInit() {
    this.scrollSubscription = this.headerService.scrollToSectionEvent.subscribe(
      (sectionId: string) => {
        this.performScroll(sectionId);
      }
    );
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  performScroll(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
