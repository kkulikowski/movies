import { MovieImageComponent } from './list/components/movie-img/movie-img.component';
import { MovieDetailsComponent } from './list/components/movie-details/movie-details.component';
import { SelectedMoviePageComponent } from './list/containers/movie/selected-movie-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './../core/material.module';
import { MoviesPreviewListComponent } from './list/components/movies-preview-list/movies-preview-list.component';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { MoviesPageComponent } from './list/containers/movies/movies.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Router } from '@angular/router';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewMoviePageComponent } from './list/containers/movie/view-selected-movie-page.component';

const ROUTES = [
  {
    path: '',
    component: MoviesPageComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: ViewMoviePageComponent,
    pathMatch: 'full',
  }
];
@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesPreviewListComponent,
    ViewMoviePageComponent,
    SelectedMoviePageComponent,
    MovieDetailsComponent,
    MovieImageComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([
      MoviesEffects
    ]),
    CommonModule,
    CustomMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MoviesService],
})
export class MoviesModule { }
