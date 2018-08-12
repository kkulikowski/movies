import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromMovies from '../../../reducers';
import * as moviesActions from '../../../actions/movies.actions';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-selected-movie-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-movie-details [movie]="movie$ | async"></app-movie-details>
  `,
  styles: [`
  `]
})
export class SelectedMoviePageComponent {

movie$: Observable<Movie>;
errors$: Observable<any>;

constructor(private store: Store<fromMovies.State>) {
    this.movie$ = store.select(fromMovies.getSelectedMovie);
    this.errors$ = store.select(fromMovies.getErrors);
  }
}

