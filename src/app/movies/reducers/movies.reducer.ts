import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie, MovieFiltersState } from '../models/movie.model';
import * as MoviesActions from '../actions/movies.actions';
import { Dictionary } from '@ngrx/entity/src/models';

export interface State extends EntityState<Movie> {
  selectedMovieId?: number | null;
  selectedMovie?: Movie | null;
  ids: number[];
  entities: Dictionary<Movie>;
  // filters?: MovieFiltersState;
  errors?: any;
  Response: string;
  totalResults: string;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.imdbID
});
export const initialState: State = adapter.getInitialState({
  selectedMovieId: null,
  selectedMovie: null,
  entities: [],
  ids: [],
  Response: 'False',
  totalResults: '0',
  // filters: {
  //   size: 10,
  //   page: 0,
  //   filter: null,
  //   totalResults: 0,
  //   Response: 'false',
  // },
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
        errors: null
      };
    }

    case MoviesActions.LOAD_MOVIES_SUCCESS: {
      // TODO set all filters and other things based on ombd api response
      return {
        ...adapter.addMany(action.payload.Search, state),
        totalResults: action.payload.totalResults,
        Response: action.payload.Response,
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
export const getTotalResults = (state: State) => state.totalResults;
export const getErrors = (state: State) => state.errors;
