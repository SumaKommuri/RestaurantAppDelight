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
    setTimeout(()=>{this.timer.emit()}, 5000);
  }

  total(){
    this.sum=0
    this.cartItems.forEach(element => {
      this.sum = this.sum + (element.itemCost*element.itemQuantity);
    });
    return this.sum
  }

}
