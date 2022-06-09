import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selectedItems: any[] = [];
  itemList: any[] = [{itemName:"Veg Biryani",itemCost: 20, itemQuantity: null},
                    {itemName:"Veg Manchuria",itemCost: 20, itemQuantity: null},
                    {itemName:"Veg Pulav",itemCost: 20, itemQuantity: null}]
  enableCheckout: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCheckout(){
    this.router.navigate(['/checkout'], {state: {data: this.selectedItems}})
  }

  updateCart(){
    this.enableCheckout = true;
    this.selectedItems = []
    for(let item of this.itemList){
      if(item.itemQuantity){
        this.selectedItems.push(item)
      }
    }
  }

}
