import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie, MovieFiltersState } from '../models/movie.model';
import * as MoviesActions from '../actions/movies.actions';
import { Dictionary } from '@ngrx/entity/src/models';

export interface State extends EntityState<Movie> {
  selectedMovieId?: number | null;
  selectedMovie?: Movie | null;
  ids: number[];
  entities: Dictionary<Movie>;
  filters?: MovieFiltersState;
  errors?: any;
  total_results: number;
  total_pages: number;
  page: number;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  // selectId: (movie: Movie) => movie.imdbID
});
export const initialState: State = adapter.getInitialState({
  selectedMovieId: null,
  selectedMovie: null,
  entities: [],
  ids: [],
  total_results: 0,
  total_pages: 0,
  page: 0,
  filters: {
    page: 0,
    query: ''
  },
  errors: [],
});

export function reducer(
  state: State = initialState,
  action: MoviesActions.All
): State {
  switch (action.type) {
    case MoviesActions.LOAD_MOVIES: {
      return {
        ...state,
        selectedMovie: null,
        selectedMovieId: null,
        filters: action.payload,
        errors: null
      };
    }

    case MoviesActions.LOAD_MOVIES_SUCCESS: {
      return {
        ...adapter.addMany(action.payload.results, state),
        total_results: action.payload.total_results,
        total_pages: action.payload.total_pages,
        page: action.payload.page,
        errors: null,
      };
    }

    case MoviesActions.ACTION_FAIL: {
      return {
        ...state,
        errors: [action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedMovieId = (state: State) => state.selectedMovieId;
export const getSelectedMovie = (state: State) => state.selectedMovie;
export const getTotalResults = (state: State) => state.total_results;
export const getErrors = (state: State) => state.errors;
