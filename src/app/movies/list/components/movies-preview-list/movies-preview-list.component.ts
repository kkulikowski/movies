import { MovieFiltersState } from './../../../models/movie.model';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'movies-preview-list.component.html',
  styleUrls: ['movies-preview-list.component.scss'],
})
export class MoviesPreviewListComponent implements OnChanges {
  @Input() moviesList: Movie[];
  @Input() filter: MovieFiltersState;
  @Input() totalResults: number;
  @Output() search: EventEmitter<MovieFiltersState> = new EventEmitter;

  searchForm: FormGroup;

  backdropWidth = '200'; // in pixels
  posterWidth = '200'; // in pixels

  constructor() {
    this.searchForm = this.createForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filter) {
      this.searchForm.patchValue({
        query: this.filter.query
      });
    }
  }

  onSubmit() {
    if (this.searchForm.invalid) return;
    this._searchHandler();
  }

  createForm(): FormGroup {
    return new FormGroup({
      query: new FormControl('', Validators.required),
    });
  }

  private _searchHandler() {
    // todo add infinite scroll maybe
    this.search.emit({...this.searchForm.value, page: 0});
  }
}
