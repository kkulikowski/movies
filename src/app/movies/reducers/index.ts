import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducer';
import * as fromRoot from '../../reducers';

export interface MoviesState {
  movies: fromMovies.State;
}

export interface State extends fromRoot.State {
  'movies': MoviesState;
}

export const reducers = {
  movies: fromMovies.reducer
};

export const getMoviesState = createFeatureSelector<MoviesState>('movies');

export const getMoviesEntitiesState = createSelector(
  getMoviesState,
  state => state.movies
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromMovies.adapter.getSelectors(getMoviesEntitiesState);

export const getSelectedMovieState = createSelector(
  getMoviesState,
  (state: MoviesState) => state.movies
);

export const getSelectedMovie = createSelector(
  getSelectedMovieState,
  fromMovies.getSelectedMovie
);

export const getErrors = createSelector(
  getMoviesEntitiesState,
  fromMovies.getErrors
);

export const getFilterState = createSelector(
  getMoviesEntitiesState,
  fromMovies.getErrors
);

export const getTotalPages = createSelector(
  getMoviesEntitiesState,
  fromMovies.getTotalPages
);

export const getTotalResults = createSelector(
  getMoviesEntitiesState,
  fromMovies.getTotalResults
);
