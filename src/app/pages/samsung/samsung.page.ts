import { CartService } from './../../services/cart.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from './../../pages/cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";

@Component({
  selector: 'app-samsung',
  templateUrl: 'samsung.page.html',
  styleUrls: ['samsung.page.scss'],
})
export class SamsungPage {
  
  //continuous counting  
  // samsung cart5 = 1
  cart5 = [];
  products5 = [];

  // samsung cart6 = 2
  cart6 = [];
  products6 = [];

  // samsung cart7 = 3
  cart7 = [];
  products7 = [];


  // samsung cart8 = 4
  cart8 = [];
  products8 = [];

  // samsung cart9 = 5
  cart9 = [];
  products9 = [];



  // to make the cart count 
  cartItemCount: BehaviorSubject<number>;
 


  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
 

  constructor(private cartService: CartService, private modalCtrl: ModalController,     public router: Router ) {}

  ngOnInit() {

    // samsung cart5
    this.products5 = this.cartService.getProducts5();
    this.cart5 = this.cartService.getCart5();

          // for the samsung 6
    this.products6 = this.cartService.getProducts6();
    this.cart6 = this.cartService.getCart6();


          // for the sumsung 7 we start from 0; 

          this.products7 = this.cartService.getProducts7();
          this.cart7 = this.cartService.getCart7();
      

          // for the sumsung 8 we start from 0; 

          this.products8 = this.cartService.getProducts8();
          this.cart8 = this.cartService.getCart8();


          
          // for the sumsung 9 we start from 0; 

          this.products9 = this.cartService.getProducts9();
          this.cart9 = this.cartService.getCart9();

    this.cartItemCount = this.cartService.getCartItemCount();
   
  }

 // button for the sumsung 5

  addToCart5(product) {
    this.cartService.addProduct5(product);
    this.animateCSS('tada');

  }

  signOut() {
    {
       this.router.navigate(['login']);
     }
 
   }

 // button for the sumsung 6

  addToCart6(product) {
    this.cartService.addProduct6(product);
    this.animateCSS('tada');

  }
 // button for the sumsung 7

  addToCart7(product) {
    this.cartService.addProduct7(product);
    this.animateCSS('tada');

  }
 // button for the sumsung 8
  addToCart8(product) {
    this.cartService.addProduct8(product);
    this.animateCSS('tada');

  }
// button for the sumsung 9
  addToCart9(product) {
    this.cartService.addProduct9(product);
    this.animateCSS('tada');

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