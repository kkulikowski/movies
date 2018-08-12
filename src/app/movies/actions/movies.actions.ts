import { MoviesResponse, MovieFiltersState } from './../models/movie.model';
import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const LOAD_MOVIES = '[Movies] Load Movies';
export const LOAD_MOVIES_SUCCESS = '[Movies] Load Movies Success';
export const LOAD_MOVIE = '[Movies] Load Movie';
export const LOAD_MOVIE_SUCCESS = '[Movies] Load Movie Success';
export const ACTION_FAIL = '[Movies] Action Fail';

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;

  constructor(public payload: MovieFiltersState = null) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_MOVIES_SUCCESS;
  constructor(public payload: MoviesResponse) {}
}

export class LoadMovie implements Action {
  readonly type = LOAD_MOVIE;

  constructor(public payload: number) {}
}

export class LoadMovieSuccess implements Action {
  readonly type = LOAD_MOVIE_SUCCESS;
  constructor(public payload: Movie) {}
}

export class ActionFail implements Action {
  readonly type = ACTION_FAIL;

  constructor(public payload: any) {}
}

export type All
  = LoadMovies
  | LoadMoviesSuccess
  | LoadMovie
  | LoadMovieSuccess
  | ActionFail;
