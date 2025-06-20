import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private darkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.darkMode.asObservable();
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  @Output() themeToggled = new EventEmitter<boolean>();

  setDarkMode(isDark: boolean) {
    this.darkMode.next(isDark);
    this.updateTheme(isDark);
  }

  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleTheme() {
    this.setDarkMode(!this.darkMode.value);
  }
}
