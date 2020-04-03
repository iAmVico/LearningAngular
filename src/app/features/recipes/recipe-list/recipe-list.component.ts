import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        ),
        new Recipe(
            'A Test Recipe 2',
            'This simply a test 2',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
        )
    ];

    @Output() recipeSelected = new EventEmitter<Recipe>();

    constructor() {}

    ngOnInit() {}

    onRecipeSelected(recipe: Recipe) {
        this.recipeSelected.emit(recipe);
    }
}
