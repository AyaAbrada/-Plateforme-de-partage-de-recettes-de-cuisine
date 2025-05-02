import { Component, OnInit } from '@angular/core';
import { Recette, RecipeService } from '../recipe-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recettes: Recette[] = [];
  errorMessage: string = ''; // Variable pour gérer les erreurs

  constructor(private recetteService: RecipeService) {}

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(
      (data) => {
        this.recettes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des recettes :', error);
        this.errorMessage = 'Impossible de récupérer les recettes. Veuillez réessayer plus tard.';
      }
    );
  }
}
