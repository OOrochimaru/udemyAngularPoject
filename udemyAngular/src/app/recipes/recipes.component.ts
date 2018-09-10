import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedListItem: RecipeModel;
  constructor() { }

  ngOnInit() {
  }

}
