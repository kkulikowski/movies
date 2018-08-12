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
  filter$: Observable<any>;
  errors$: Observable<any>;
  moviesList$: Observable<Movie[]>;
  filterState$: Observable<any>;
  totalPages$: Observable<number>;
  currentPage$: Observable<number>;
  totalItems$: Observable<number>;

  constructor(
      private store: Store<fromMovies.State>,
      private router: Router,
      private route: ActivatedRoute) {
    this.moviesList$ = store.select(fromMovies.selectAll);
    // this.errors$ = this.store.select(fromMovies.getErrors);
    // this.filter$ = this.store.select(fromMovies.getFilterState);
    // this.totalItems$ = this.store.select(fromMovies.getTotalItems);
  }

  searchHandler($event: MovieFiltersState) {
    this.store.dispatch(new moviesActions.LoadMovies($event));
  }
}
