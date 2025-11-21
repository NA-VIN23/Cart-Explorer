import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.css'
})
export class CartListComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCarts().subscribe({
      next: (data: any) => {
        this.carts = data.carts;
      },
      error: (error: any) => {
        console.error('Error fetching carts:', error);
      }
    });
  }
}