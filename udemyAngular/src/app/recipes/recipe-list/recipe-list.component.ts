import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeElementWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('item1','item1 description ','https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=700&q=85'),
    new RecipeModel('item2','item2 decription ','https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png')
  ];
  constructor() {
    console.log(this.recipes);
   }
  ngOnInit() {
  }
  recipeElementSelected(recipeElementSelected: RecipeModel ){
    console.log("hello")
    this.recipeElementWasSelected.emit(recipeElementSelected);
  }

}
