import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// for the first cart

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;

}
 // the reason that we make two products because we need them have their own price and value 

// for the second cart
export interface Product1 {
  id1: number;
  name1: string;
  price1: number;
  amount1: number;

}

// for the 3rd apple cart
export interface Product2 {
  id2: number;
  name2: string;
  price2: number;
  amount2: number;

}

// for the 4th apple cart
export interface Product3 {
  id3: number;
  name3: string;
  price3: number;
  amount3: number;

}

// for the 5th apple cart
export interface Product4 {
  id4: number;
  name4: string;
  price4: number;
  amount4: number;

}

//sumsung

// for the 6th samsung cart
export interface Product5 {
  id5: number;
  name5: string;
  price5: number;
  amount5: number;

}

// for the 7th samsung cart
export interface Product6 {
  id6: number;
  name6: string;
  price6: number;
  amount6: number;

}

// for the 8th samsung cart
export interface Product7 {
  id7: number;
  name7: string;
  price7: number;
  amount7: number;

}

// for the 9th samsung cart
export interface Product8 {
  id8: number;
  name8: string;
  price8: number;
  amount8: number;

}

// for the 10th samsung cart
export interface Product9 {
  id9: number;
  name9: string;
  price9: number;
  amount9: number;

}


@Injectable({
  providedIn: 'root'
})


export class CartService {
  // apple cart1
  data: Product[] = [
    { id: 0, name: 'Apple 14pro max', price: 33990, amount: 0 },
 
   
  ];
// second cart
  data1: Product1[] = [
    { id1: 0, name1: 'Apple ipadAir 2022', price1: 35490, amount1: 0 },
   
  ];
 
  // third apple cart
  data2: Product2[] = [
    { id2: 0, name2: 'Apple Watch Series 8 2022', price2: 104990, amount2: 0 },
   
  ];
 
   
  // fourth apple cart
  data3: Product3[] = [
    { id3: 0, name3: 'Apple MacBook air (2022)', price3: 87990, amount3: 0 },
   
  ];

    // fifth apple cart
    data4: Product4[] = [
      { id4: 0, name4: 'AirPods pro 2022', price4: 14193, amount4: 0 },
     
    ];

  //samsung

  // 6th samsung cart
  data5: Product5[] = [
    { id5: 0, name5: 'Samsung Galaxy Z Flip4', price5: 58990, amount5: 0 },
   
  ];

   // 7th samsung cart
   data6: Product6[] = [
    { id6: 0, name6: 'Samsung Galaxy A33 5G', price6: 19990, amount6: 0 },
   
  ];  
 
  // 8th samsung cart
  data7: Product7[] = [
    { id7: 0, name7: 'Samsung Tab A8 LTE', price7: 18990, amount7: 0 },
   
  ];

  // 9th samsung cart
  data8: Product8[] = [
    { id8: 0, name8: '49" Odyssey G9 Gaming Monitor', price8: 77299, amount8: 0 },
   
  ];  

  // 10th samsung cart
  data9: Product9[] = [
    { id9: 0, name9: 'Galaxy Buds2', price9: 6990, amount9: 0 },
   
  ];


// apple cart1
  private cart = [];

// second cart
  private cart1 = [];


// third cart
  private cart2 = [];

// fourth cart
  private cart3 = [];


// fifth cart
  private cart4 = [];


// samsung cart5
  private cart5 = [];

// 6th cart
  private cart6 = [];

// 7th cart
private cart7 = [];

// 8th cart
private cart8 = [];

// 9th cart
private cart9 = [];


  private cartItemCount = new BehaviorSubject(0);
  private cartItemCount1 = new BehaviorSubject(0);
  private cartItemCount2 = new BehaviorSubject(0);
  private cartItemCount3 = new BehaviorSubject(0);
  private cartItemCount4 = new BehaviorSubject(0);
 
  private cartItemCount5 = new BehaviorSubject(0);
  private cartItemCount6 = new BehaviorSubject(0);
  private cartItemCount7 = new BehaviorSubject(0);
  private cartItemCount8 = new BehaviorSubject(0);
  private cartItemCount9 = new BehaviorSubject(0);

  constructor() {}

   // apple cart1
  getProducts() {
    return this.data;


  }

// apple cart2
  getProducts1() {
    return this.data1;
  }

  // apple cart3
  getProducts2() {
    return this.data2;
  }

    // apple cart4
    getProducts3() {
      return this.data3;
    }
  
     // apple cart5
     getProducts4() {
      return this.data4;
    }

//samsung
 // samsung cart5
 getProducts5() {
  return this.data5;
}

 // samsung cart6
 getProducts6() {
  return this.data6;
}

 //  samsung  cart7
 getProducts7() {
  return this.data7;
}

 //  samsung cart8
 getProducts8() {
  return this.data8;
}

 //  samsung cart9
 getProducts9() {
  return this.data9;
}


  // apple cart1
  getCart() {
    return this.cart;
  }

  
// second cart
  getCart1() {
    return this.cart1;
  }


  // third apple cart
  getCart2() {
    return this.cart2;
  }

 // 4th cart
 getCart3() {
  return this.cart3;
}


 // 5th cart
 getCart4() {
  return this.cart4;
}

//samsung
 // 6th cart
 getCart5() {
  return this.cart5;
}

 // 7th cart
 getCart6() {
  return this.cart6;
}

 // 8th cart
 getCart7() {
  return this.cart7;
}

 // 9th cart
 getCart8() {
  return this.cart8;
}

 // 10th cart
 getCart9() {
  return this.cart9;
}


  // apple cart1
  getCartItemCount() {
    return this.cartItemCount;
  }



// second cart
  getCartItemCount1() {
    return this.cartItemCount1;
  }

  
// apple cart3
getCartItemCount2() {
  return this.cartItemCount2;
}

  
// apple cart4
getCartItemCount3() {
  return this.cartItemCount3;
}

// apple cart5
getCartItemCount4() {
  return this.cartItemCount4;
}


// samsung cart6
getCartItemCount5() {
  return this.cartItemCount5;
}

// samsung cart7
getCartItemCount6() {
  return this.cartItemCount6;
}

// samsung cart8
getCartItemCount7() {
  return this.cartItemCount7;
}

// samsung cart9
getCartItemCount8() {
  return this.cartItemCount8;
}

// samsung cart10
getCartItemCount9() {
  return this.cartItemCount9;
}



  // apple cart1
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

// second cart
  addProduct1(product) {
    let added = false;
    for (let f of this.cart1) {
      if (f.id1 === product.id1) {
        f.amount1 += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount1 = 1;
      this.cart1 .push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  // third cart
  addProduct2(product) {
    let added = false;
    for (let g of this.cart2) {
      if (g.id2 === product.id2) {
        g.amount2 += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount2 = 1;
      this.cart2 .push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  
  // fourth cart
  addProduct3(product) {
    let added = false;
    for (let i of this.cart3) {
      if (i.id3 === product.id3) {
        i.amount3 += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount3 = 1;
      this.cart3 .push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

    // fifth cart
    addProduct4(product) {
      let added = false;
      for (let h of this.cart4) {
        if (h.id4 === product.id4) {
          h.amount4 += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        product.amount4 = 1;
        this.cart4 .push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }



    // 6th cart
    addProduct5(product) {
      let added = false;
      for (let h of this.cart5) {
        if (h.id5 === product.id5) {
          h.amount5 += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        product.amount5 = 1;
        this.cart5 .push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }

    // 7thcart
    addProduct6(product) {
      let added = false;
      for (let h of this.cart6) {
        if (h.id6 === product.id6) {
          h.amount6 += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        product.amount6 = 1;
        this.cart6 .push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }

    // 8th cart
    addProduct7(product) {
      let added = false;
      for (let h of this.cart7) {
        if (h.id7 === product.id7) {
          h.amount7 += 1;
          added = true;
          break;
        }
      }
      if (!added) {
        product.amount7 = 1;
        this.cart7 .push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }

        // 9th cart
        addProduct8(product) {
          let added = false;
          for (let h of this.cart8) {
            if (h.id8 === product.id8) {
              h.amount8 += 1;
              added = true;
              break;
            }
          }
          if (!added) {
            product.amount8 = 1;
            this.cart8 .push(product);
          }
          this.cartItemCount.next(this.cartItemCount.value + 1);
        }
        // 10th cart
        addProduct9(product) {
          let added = false;
          for (let h of this.cart9) {
            if (h.id9 === product.id9) {
              h.amount9 += 1;
              added = true;
              break;
            }
          }
          if (!added) {
            product.amount9 = 1;
            this.cart9 .push(product);
          }
          this.cartItemCount.next(this.cartItemCount.value + 1);
        }

  // apple cart1
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


// second cart
  decreaseProduct1(product) {
    for (let [index, f] of this.cart1.entries()) {
      if (f.id1 === product.id1) {
        f.amount1 -= 1;
        if (f.amount1 == 0) {
         
          this.cart1.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  
  // third cart
  decreaseProduct2(product) {
    for (let [index, g] of this.cart2.entries()) {
      if (g.id2 === product.id2) {
        g.amount2 -= 1;
        if (g.amount2 == 0) {
         
          this.cart2.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


    // 4th apple cart
    decreaseProduct3(product) {
      for (let [index, i] of this.cart3.entries()) {
        if (i.id3 === product.id3) {
          i.amount3 -= 1;
          if (i.amount3 == 0) {
           
            this.cart3.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }


    
    // 5th apple cart
    decreaseProduct4(product) {
      for (let [index, h] of this.cart4.entries()) {
        if (h.id4 === product.id4) {
          h.amount4 -= 1;
          if (h.amount4 == 0) {
           
            this.cart4.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
    }
  
    // 6th apple cart
    decreaseProduct5(product) {
      for (let [index, h] of this.cart5.entries()) {
        if (h.id5 === product.id5) {
          h.amount5 -= 1;
          if (h.amount5 == 0) {
           
            this.cart5.splice(index, 1);
          }
        }
      }
      this.cartItemCount.next(this.cartItemCount.value - 1);
    } 

   // 7th apple cart
   decreaseProduct6(product) {
    for (let [index, h] of this.cart6.entries()) {
      if (h.id6 === product.id6) {
        h.amount6 -= 1;
        if (h.amount6 == 0) {
         
          this.cart6.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

   // 8th apple cart
   decreaseProduct7(product) {
    for (let [index, h] of this.cart7.entries()) {
      if (h.id7 === product.id7) {
        h.amount7 -= 1;
        if (h.amount7 == 0) {
         
          this.cart7.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

   // 9th apple cart
   decreaseProduct8(product) {
    for (let [index, h] of this.cart8.entries()) {
      if (h.id8 === product.id8) {
        h.amount8 -= 1;
        if (h.amount8 == 0) {
         
          this.cart8.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

   // 10th apple cart
   decreaseProduct9(product) {
    for (let [index, h] of this.cart9.entries()) {
      if (h.id9 === product.id9) {
        h.amount9 -= 1;
        if (h.amount9 == 0) {
         
          this.cart9.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }


  // apple cart1

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        
        this.cart.splice(index, 1);
      }
    }
  }



  // second cart
  removeProduct1(product) {
    for (let [index, f] of this.cart1.entries()) {
      if (f.id1 === product.id1) {
       
        this.cartItemCount.next(this.cartItemCount.value - f.amount1);
        this.cart1.splice(index, 1);
       
      }
    } 
  }


    // third cart
    removeProduct2(product) {
      for (let [index, g] of this.cart2.entries()) {
        if (g.id2 === product.id2) {
         
          this.cartItemCount.next(this.cartItemCount.value - g.amount2);
          this.cart2.splice(index, 1);
         
        }
      } 
    }

    
    // 4th cart
    removeProduct3(product) {
      for (let [index, i] of this.cart3.entries()) {
        if (i.id3 === product.id3) {
         
          this.cartItemCount.next(this.cartItemCount.value - i.amount3);
          this.cart3.splice(index, 1);
         
        }
      } 
    }

       // 5th cart
       removeProduct4(product) {
        for (let [index, h] of this.cart4.entries()) {
          if (h.id4 === product.id4) {
           
            this.cartItemCount.next(this.cartItemCount.value - h.amount4);
            this.cart4.splice(index, 1);
           
          }
        } 
      }
  

           // 6th cart
           removeProduct5(product) {
            for (let [index, h] of this.cart5.entries()) {
              if (h.id5 === product.id5) {
               
                this.cartItemCount.next(this.cartItemCount.value - h.amount5);
                this.cart5.splice(index, 1);
               
              }
            } 
          }

        // 7th cart
       removeProduct6(product) {
        for (let [index, h] of this.cart6.entries()) {
          if (h.id6 === product.id6) {
           
            this.cartItemCount.next(this.cartItemCount.value - h.amount6);
            this.cart6.splice(index, 1);
           
          }
        } 
      }

           // 8th cart
           removeProduct7(product) {
            for (let [index, h] of this.cart7.entries()) {
              if (h.id7 === product.id7) {
               
                this.cartItemCount.next(this.cartItemCount.value - h.amount7);
                this.cart7.splice(index, 1);
               
              }
            } 
          }
  
          // 9th cart
            removeProduct8(product) {
              for (let [index, h] of this.cart8.entries()) {
                if (h.id8 === product.id8) {
           
            this.cartItemCount.next(this.cartItemCount.value - h.amount8);
            this.cart8.splice(index, 1);
           
          }
        } 
      }

           // 10th cart
           removeProduct9(product) {
            for (let [index, h] of this.cart9.entries()) {
              if (h.id9 === product.id9) {
               
                this.cartItemCount.next(this.cartItemCount.value - h.amount9);
                this.cart9.splice(index, 1);
               
              }
            } 
          }
}