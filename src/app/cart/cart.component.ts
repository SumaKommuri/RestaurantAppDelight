import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  sum: any = 0
  nations: any[] = []

  @Input()
  cartItems: any[]=[]

  @Output()
  timer = new EventEmitter()

  constructor(private cartService:CartService) { 
   this.getCountries();
  }

  getCountries(){
    this.cartService.getData().subscribe(data=> {
      console.log(data)
      this.nations = data.data;
    })
  }

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
