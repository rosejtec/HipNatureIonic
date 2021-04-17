import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { PurchaseplanReq } from '../../models/purchaseplan-req';
import { PurchaseplanService } from '../../services/purchaseplan.service';
import { Purchasedplan } from 'src/app/models/purchasedplan';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  resultSuccess: boolean;
  resultError: boolean;
  cart: Product[] = [];
  currentPlan: Purchasedplan
  message:string;
  constructor(private purchasePlanService: PurchaseplanService, private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    this.currentPlan = null
    this.resultSuccess = false;
    this.resultError = false;

   }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.retrieveCurrentPlan();
    console.log(this.currentPlan);
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
  getTotalSession(){
    if (this.currentPlan != null){
      return (this.currentPlan.sessionLeft - this.cart.length)
    }
  }
  getCreditsLeft(){
    if (this.currentPlan != null) {
      return (this.currentPlan.creditValue - this.getTotal())
    }
  }
  retrieveCurrentPlan() {
    this.purchasePlanService.getCurrentPlan().subscribe(
      response => {
        let temp: Purchasedplan = response;
        this.currentPlan = temp;
        JSON.stringify(this.currentPlan)
        console.log(this.currentPlan)
      },
      error => {
        console.log(error);
      }
    )
  }
  makeCheckoutSession(){
    console.log("In Checkout Session Method");
    console.log(this.cart);
    this.cartService.checkoutSession(this.cart).subscribe(response =>{
      this.resultSuccess = true;
      this.message = "Sessions successfully Registered";
      this.cart = []
      this.getTotalSession();
      this.getCreditsLeft();
    },
    error => {
      this.resultError = true;
      this.resultSuccess = false;
      this.message = "An error has occurred while creating new Booking: " + error;
    }
  )
  }

}
