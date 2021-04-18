import { IndexPage } from './pages/index/index.page';
import { IndexPageModule } from './pages/index/index.module';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from './services/common.service';


import { CartModalPage } from './pages/cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
	@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

	cart = [];
	cartItemCount: BehaviorSubject<number>;

  public appPagesLogin = [
	{ title: 'Home', url: '/index', icon: 'home' },
	{ title: 'Logout', url: '/login', icon: 'exit' }

	];

	public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
	];

	public appPagesMyInformation = [
		{
			title: 'View Payment Details',
			url: "/view-my-credit-cards",
			icon: 'card'
		},
		{
			title: 'View My Bookings',
			url: "/view-anything-tabs/",
			icon: 'apps'
		}
	]

	public appPagesClassAndPlan = [
		{
			title: 'View All Plans',
			url: "/view-all-plans",
			icon: 'add-circle'
		},

		{
			title: 'View All Classes',
			url: "/view-all-classes",
			icon: 'list'
		}
	]

	constructor(public commonService: CommonService, private cartService: CartService, private modalCtrl: ModalController) {
    console.log(commonService.getIsLogin())

	}

	ngOnInit() {
		this.cart = this.cartService.getCart();
		this.cartItemCount = this.cartService.getCartItemCount();
	  }

	ngOnChanges() {

	}

	addToCart(product) {
		this.cartService.addSession(product);
		this.animateCSS('tada');
	}

	async openCart() {
		this.animateCSS('bounceOutLeft', true);
	 
		let modal = await this.modalCtrl.create({
		  component: CartModalPage,
		  cssClass: 'cart-modal'
		});
		modal.onWillDismiss().then(() => {
		  this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
		  this.animateCSS('bounceInLeft');
		  this.cart = this.cartService.getCart();
		  this.cartItemCount = this.cartService.getCartItemCount();
		});
		modal.present();
	  }
	  
	animateCSS(animationName, keepAnimated = false) {
		const node = this.fab.nativeElement;
		node.classList.add('animated', animationName)

		function handleAnimationEnd() {
			if (!keepAnimated) {
				node.classList.remove('animated', animationName);
			}
			node.removeEventListener('animationend', handleAnimationEnd)
		}
		node.addEventListener('animationend', handleAnimationEnd)
	}
}
