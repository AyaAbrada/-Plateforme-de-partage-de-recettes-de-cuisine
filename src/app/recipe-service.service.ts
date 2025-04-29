import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recette {
  id: number;
  nom: string;
  ingredients: string[];
  etapes: string[];
  photo: string;
  categorie: string;
}

@Injectable({
  providedIn: 'root', 
})
export class RecipeService {
  private apiUrl = 'http://localhost:3003/recettes'; 

  constructor(private http: HttpClient) {}

  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.apiUrl);
  }
}
