import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, RouterModule, DiscountPipe],
  templateUrl: './cart-details.html',
  styleUrl: './cart-details.css'
})
export class CartDetailsComponent implements OnInit {
  cart: any = null;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const cartId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.cartService.getCartById(cartId).subscribe({
      next: (data: any) => {
        this.cart = data;
        this.products = data.products;
      },
      error: (error: any) => {
        console.error('Error fetching cart details:', error);
      }
    });
  }
}