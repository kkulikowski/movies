import { MoviesResponse } from './../models/movie.model';
import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { RestFilter } from '../../core/models/rest-filter.model';

export const LOAD_MOVIES = '[Movies] Load Movies';
export const LOAD_MOVIES_SUCCESS = '[Movies] Load Movies Success';

export const ACTION_FAIL = '[Movies] Action Fail';

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;

  constructor(public payload: { entry: Movie, filter: RestFilter} = null) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_MOVIES_SUCCESS;
  // TODO set list here based on ombd response
  constructor(public payload: MoviesResponse) {}
}

export class ActionFail implements Action {
  readonly type = ACTION_FAIL;

  constructor(public payload: any) {}
}

export type All
  = LoadMovies
  | LoadMoviesSuccess
  | ActionFail;
