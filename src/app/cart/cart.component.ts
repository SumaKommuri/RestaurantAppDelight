import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  sum: any = 0

  @Input()
  cartItems: any[]=[]

  @Output()
  timer = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.total()
    setTimeout(()=>{this.timer.emit()}, 5000);
  }

  total(){
    let sum=0
    this.cartItems.forEach(element => {
      sum = sum + (element.itemCost*element.itemQuantity);
    });
    this.sum = sum
  }

  

  get totals(){
    let sum=0
    this.cartItems.forEach(element => {
      sum = sum + (element.itemCost*element.itemQuantity);
    });
    return sum
  }

}
