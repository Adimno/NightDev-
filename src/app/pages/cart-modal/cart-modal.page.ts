import { Product, CartService, Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9 } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
   // 1st cart
  cart: Product[] = [];

  // 2nd cart
  cart1: Product1[] = [];

  // 3rdd cart
  cart2: Product2[] = [];

   // 4th cart
  cart3: Product3[] = [];

  // 5th cart
  cart4: Product4[] = [];

// samsung
  // 6th cart
  cart5: Product5[] = [];
  
  // 7th cart
  cart6: Product6[] = [];

  // 8th cart
  cart7: Product7[] = [];

  // 9th cart
  cart8: Product8[] = [];

  // 10th cart
  cart9: Product9[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cart1 = this.cartService.getCart1();
    this.cart2 = this.cartService.getCart2();
    this.cart3 = this.cartService.getCart3();
    this.cart4 = this.cartService.getCart4();

    this.cart5 = this.cartService.getCart5();
    this.cart6 = this.cartService.getCart6();
    this.cart7 = this.cartService.getCart7();
    this.cart8 = this.cartService.getCart8();
    this.cart9 = this.cartService.getCart9();
  }

  // first cart

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }


  // second cart
  decreaseCartItem1(product) {
    this.cartService.decreaseProduct1(product);
  }

   // third apple cart
   decreaseCartItem2(product) {
    this.cartService.decreaseProduct2(product);
  }

    // fourth apple cart
    decreaseCartItem3(product) {
      this.cartService.decreaseProduct3(product);
    }

     // fifth apple cart
     decreaseCartItem4(product) {
      this.cartService.decreaseProduct4(product);
    }
  
       // sixth apple cart
       decreaseCartItem5(product) {
        this.cartService.decreaseProduct5(product);
      }
         // seventh apple cart
     decreaseCartItem6(product) {
      this.cartService.decreaseProduct6(product);
    }
       // eighth apple cart
       decreaseCartItem7(product) {
        this.cartService.decreaseProduct7(product);
      }
         // nineth apple cart
     decreaseCartItem8(product) {
      this.cartService.decreaseProduct8(product);
    }
       // tenth apple cart
       decreaseCartItem9(product) {
        this.cartService.decreaseProduct9(product);
      }




// first cart
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }


  // second cart
  increaseCartItem1(product) {
    this.cartService.addProduct1(product);
  }

   // third apple cart
   increaseCartItem2(product) {
    this.cartService.addProduct2(product);
  }

    // 4th apple cart
    increaseCartItem3(product) {
      this.cartService.addProduct3(product);
    }
  
     // 5th apple cart
     increaseCartItem4(product) {
      this.cartService.addProduct4(product);
    }
  
      // 6th apple cart
      increaseCartItem5(product) {
        this.cartService.addProduct5(product);
      }
        // 7th apple cart
     increaseCartItem6(product) {
      this.cartService.addProduct6(product);
    }
      // 8th apple cart
      increaseCartItem7(product) {
        this.cartService.addProduct7(product);
      }
        // 9th apple cart
     increaseCartItem8(product) {
      this.cartService.addProduct8(product);
    }
      // 10th apple cart
      increaseCartItem9(product) {
        this.cartService.addProduct9(product);
      }




// first cart
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  
  // second cart
  removeCartItem1(product) {
    this.cartService.removeProduct1(product);
  }


    
  // third apple  cart
  removeCartItem2(product) {
    this.cartService.removeProduct2(product);
  }


  
    
  // 4 apple  cart
  removeCartItem3(product) {
    this.cartService.removeProduct3(product);
  }
    
  // 5 apple  cart
  removeCartItem4(product) {
    this.cartService.removeProduct4(product);
  }

 // 6 samsung  cart
 removeCartItem5(product) {
  this.cartService.removeProduct5(product);
}

 // 7 samsung  cart
 removeCartItem6(product) {
  this.cartService.removeProduct6(product);
}

 // 8 samsung  cart
 removeCartItem7(product) {
  this.cartService.removeProduct7(product);
}

 // 9 samsung  cart
 removeCartItem8(product) {
  this.cartService.removeProduct8(product);
}

 // 10 samsung  cart
 removeCartItem9(product) {
  this.cartService.removeProduct9(product);
}

// first cart

  getTotal() {
    return this.cart.reduce((i, j,) => i + j.price * j.amount , 0);
   
   
  }

  
  // second cart
  getTotal1() {
    return this.cart1.reduce((i, j,) => i + j.price1 * j.amount1 , 0);
   
   
  }
  
   
  // third apple cart
  getTotal2() {
    return this.cart2.reduce((i, j,) => i + j.price2 * j.amount2 , 0);
   
   
  }
  

    
  // 4th apple cart
  getTotal3() {
    return this.cart3.reduce((i, j,) => i + j.price3 * j.amount3 , 0);
   
   
  }

   // fifth apple cart
   getTotal4() {
    return this.cart4.reduce((i, j,) => i + j.price4 * j.amount4 , 0);
   
  }
  
 // 6th apple cart
 getTotal5() {
  return this.cart5.reduce((i, j,) => i + j.price5 * j.amount5 , 0);
 
}

 // 7th apple cart
 getTotal6() {
  return this.cart6.reduce((i, j,) => i + j.price6 * j.amount6 , 0);
 
}

 // 8th apple cart
 getTotal7() {
  return this.cart7.reduce((i, j,) => i + j.price7 * j.amount7 , 0);
 
}

 // 9th apple cart
 getTotal8() {
  return this.cart8.reduce((i, j,) => i + j.price8 * j.amount8 , 0);
 
}

 // 10th apple cart
 getTotal9() {
  return this.cart9.reduce((i, j,) => i + j.price9 * j.amount9 , 0);
 
}

// modal close


  close() {
    this.modalCtrl.dismiss();
  }




  async checkout() {
    // Perfom PayPal or Stripe checkout process

  
 

    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'We will deliver your package as soon as possible',
      buttons: [{
        text: 'Ok',
        handler: () => {
          window.location.reload();

        }
      }]
    
     
    } );
    
    alert.present().then(() => {
   
    
      this.modalCtrl.dismiss();
    });
  }
}