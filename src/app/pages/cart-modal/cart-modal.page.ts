import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];
  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  close() {
    this.modalCtrl.dismiss();
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.credit, 0);
  }
  removeCartItem(product) {
    this.cartService.removeSession(product);
  }

}
