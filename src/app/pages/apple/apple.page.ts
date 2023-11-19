import { CartService } from './../../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from './../../pages/cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: 'apple.page.html',
  styleUrls: ['apple.page.scss']
})
export class ApplePage {
  
  // apple cart1
  cart = [];
  products = [];

    // apple cart2
  cart1 = [];
  products1 = [];

// apple cart3
  cart2 = [];
  products2 = [];


  // apple cart4
  cart3 = [];
  products3 = [];

    // apple cart5
    cart4 = [];
    products4 = [];



  // to make the cart count 
  cartItemCount: BehaviorSubject<number>;
 


  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
 

  constructor(private cartService: CartService, private modalCtrl: ModalController,     public router: Router  ) {}

  ngOnInit() {

    // apple cart1
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();

          // for the apple 2
    this.products1 = this.cartService.getProducts1();
    this.cart1 = this.cartService.getCart1();


          // for the apple 3 we start from 0; 

          this.products2 = this.cartService.getProducts2();
          this.cart2 = this.cartService.getCart2();
      

          // for the apple 4 we start from 0; 

          this.products3 = this.cartService.getProducts3();
          this.cart3 = this.cartService.getCart3();


          
          // for the apple 5 we start from 0; 

          this.products4 = this.cartService.getProducts4();
          this.cart4 = this.cartService.getCart4();

    this.cartItemCount = this.cartService.getCartItemCount();
   
  }

 // button for the apple 1

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');

  }

 // button for the apple 2

  addToCart1(product) {
    this.cartService.addProduct1(product);
    this.animateCSS('tada');

  }
 // button for the apple 3

  addToCart2(product) {
    this.cartService.addProduct2(product);
    this.animateCSS('tada');

  }
 // button for the apple 4
  addToCart3(product) {
    this.cartService.addProduct3(product);
    this.animateCSS('tada');

  }

  addToCart4(product) {
    this.cartService.addProduct4(product);
    this.animateCSS('tada');

  }

  signOut() {
    {
       this.router.navigate(['login']);
     }
 
   }


  
// to open the cart
  async openCart() {
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });



    // animation of the cart

    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
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