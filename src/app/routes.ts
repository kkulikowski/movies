import { Routes } from '@angular/router';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule'
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];
