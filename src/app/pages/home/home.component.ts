import { Component } from '@angular/core';
import { LogoWithBrandComponent } from '../components/shared/logo-with-brand/logo-with-brand.component';

@Component({
  selector: 'app-home',
  imports: [LogoWithBrandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
