import { Injectable } from '@angular/core';
import { Car } from '../models/entity/car';
import { CartItems } from '../models/cart/cartItems';
import { CartItem } from '../models/cart/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(car: Car) {
    let item = CartItems.find((c) => c.car.carId === car.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItems;
  }
}
