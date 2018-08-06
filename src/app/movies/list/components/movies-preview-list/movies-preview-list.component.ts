import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from '../../../models/movie.model';

@Component({
  selector: 'app-movies-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'movies-preview-list.component.html',
  styleUrls: ['movies-preview-list.component.scss'],
})
export class MoviesPreviewListComponent {
  @Input() moviesList: Movie[];

  constructor() {
  }
}
