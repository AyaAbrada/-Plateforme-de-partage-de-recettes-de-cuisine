import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'recipe-liste', component: RecipeListComponent },
    { path: 'recipe-detail/:id', loadComponent: () => import('./recipe-detail/recipe-detail.component').then(m => m.RecipeDetailComponent) },
    { path: '**', component: HomeComponent, pathMatch: 'full'},
];
