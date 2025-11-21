import { Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list';
import { CartDetailsComponent } from './components/cart-details/cart-details';

export const routes: Routes = [
  { path: '', component: CartListComponent },
  { path: 'cart/:id', component: CartDetailsComponent },
  { path: '**', redirectTo: '' }
];


