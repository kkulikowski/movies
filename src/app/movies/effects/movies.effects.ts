import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, defer, of, throwError } from 'rxjs';

import * as moviesActions from '../actions/movies.actions';
import { MoviesService } from '../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Movie, MoviesResponse } from '../models/movie.model';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {
  // TODO check that catchError syntax in rxjs 6.0
  @Effect()
  loadMovies: Observable<Action> = this.actions$
    .ofType<moviesActions.LoadMovies>(moviesActions.LOAD_MOVIES)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.moviesService.loadMovies(payload)),
      map((response: MoviesResponse) => new moviesActions.LoadMoviesSuccess(response)),
      catchError(error => throwError(new moviesActions.ActionFail(error)))
    );

  @Effect()
  loadMovie: Observable<Action> = this.actions$
    .ofType<moviesActions.LoadMovie>(moviesActions.LOAD_MOVIE)
    .pipe(
      map(action => action.payload),
      switchMap(payload => this.moviesService.loadMovie(payload)),
      map((response: Movie) => new moviesActions.LoadMovieSuccess(response)),
      catchError(error => throwError(new moviesActions.ActionFail(error)))
    );

  constructor(private actions$: Actions, private moviesService: MoviesService, private router: Router,
    private route: ActivatedRoute) {}
}
