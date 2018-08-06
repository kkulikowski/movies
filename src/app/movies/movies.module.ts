import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { MoviesPageComponent } from './list/containers/movies/movies.component';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '../core/material.module';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';

const ROUTES = [
  {
    path: '',
    component: MoviesPageComponent,
    pathMatch: 'full',
  }
];
@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([
      MoviesEffects
    ]),
    CustomMaterialModule,
    CommonModule
  ],
  providers: [MoviesService],
})
export class MoviesModule { }
