import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IngredientModel } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInp : ElementRef;
  @ViewChild('amountInput') amountInp : ElementRef;

  @Output() shoppingList = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit() {
  }
  submitted(){
    const name = this.nameInp.nativeElement.value;
    const amount = this.amountInp.nativeElement.value;
    const ing = new IngredientModel(name, amount);
    this.shoppingList.emit(ing);
  }

}
