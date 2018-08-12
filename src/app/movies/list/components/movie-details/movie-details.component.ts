import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { Router } from '@angular/router';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';

@Component({
  selector: 'app-movie-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'movie-details.component.html',
  styleUrls: ['movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnChanges {
  @Input() movie: Movie;

  backdrop: string = '';
  poster: string = '';

  imageWidth = '500'; // in pixels

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.movie && this.movie) {
      this.backdrop = `${IMG_BASE_URL}w${this.imageWidth}/${this.movie.backdrop_path}`;
      this.poster = `${IMG_BASE_URL}w${this.imageWidth}/${this.movie.poster_path}`;
    }
  }

  backToMovieList() {
    // i know there is location.back method, but if someone sends link to another person
    // and that person clicks on the link then back to movies list button wont act as expected
    this.router.navigate(['/movies']);
  }
}
