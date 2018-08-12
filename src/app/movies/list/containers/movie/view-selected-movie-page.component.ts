import { Component, OnDestroy, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromMovies from '../../../reducers';
import * as moviesActions from '../../../actions/movies.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-movie-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-movie-page></app-selected-movie-page>
  `,
  styles: [`
    app-selected-movie-page {display: flex;}
  `]
})
export class ViewMoviePageComponent implements OnDestroy, OnInit {
  actionsSubscription: Subscription;

  constructor(private store: Store<fromMovies.State>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.actionsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id']) {
            this.store.dispatch(new moviesActions.LoadMovie(params['id']));
          }
        }
      );
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
