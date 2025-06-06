import { Component, effect, inject, signal } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly currentUrl = signal("");
  readonly router = inject(Router)
    constructor() {
      this.currentUrl.set(this.router.url)
    effect(() =>
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          this.currentUrl.set(event.urlAfterRedirects);
        })
    );
  }
}
