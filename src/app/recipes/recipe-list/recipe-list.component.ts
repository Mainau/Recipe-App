import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.modle";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Käsespätzel', 'test',
    'https://upload.wikimedia.org/wikipedia/commons/e/e2/2015_0718_K%C3%A4sesp%C3%A4tzle_S%C3%B6lden.jpg'),
    new Recipe('test', 'test', 'test')
  ];
  constructor() { }

  ngOnInit() {
  }

}
