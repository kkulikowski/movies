import { MovieFiltersState } from './../../../models/movie.model';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromMovies from '../../../reducers';
import * as moviesActions from '../../../actions/movies.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movies-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.scss'],
})
export class MoviesPageComponent {
  filter$: Observable<MovieFiltersState>;
  errors$: Observable<any>;
  moviesList$: Observable<Movie[]>;
  totalPages$: Observable<number>;
  totalResults$: Observable<number>;

  constructor(
      private store: Store<fromMovies.State>,
      private router: Router,
      private route: ActivatedRoute) {
        this.filter$ = this.store.select(fromMovies.getFilterState);
        this.errors$ = this.store.select(fromMovies.getErrors);
        this.moviesList$ = store.select(fromMovies.selectAll);
        this.totalPages$ = this.store.select(fromMovies.getTotalPages);
        this.totalResults$ = this.store.select(fromMovies.getTotalResults);
  }

  searchHandler($event: MovieFiltersState) {
    this.store.dispatch(new moviesActions.LoadMovies($event));
  }
}
