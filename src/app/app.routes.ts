import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "", loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: "precios", loadComponent: () => import("./pages/prices-list/prices-list.component").then(m => m.PricesListComponent)
  }
];
