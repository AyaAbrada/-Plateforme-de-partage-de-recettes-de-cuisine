import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recetteId: string | null = null;
  recette: any;

  constructor(
    private route: ActivatedRoute,
    private postService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recetteId = this.route.snapshot.paramMap.get('id');
    if (this.recetteId) {
      this.postService.getRecceteById(this.recetteId).subscribe((data) => {
        this.recette = data;
        if (this.recette) {
          console.log(this.recette.nom, this.recette.description);
        }
      });
    }
  }

  retourVersListe(): void {
    this.router.navigate(['/recettes']);
  }
}
