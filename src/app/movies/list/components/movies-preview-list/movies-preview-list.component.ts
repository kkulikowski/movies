import { MovieFiltersState } from './../../../models/movie.model';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'movies-preview-list.component.html',
  styleUrls: ['movies-preview-list.component.scss'],
})
export class MoviesPreviewListComponent {
  @Input() moviesList: Movie[];
  @Output() search: EventEmitter<MovieFiltersState> = new EventEmitter;

  searchForm: FormGroup;

  constructor() {
    this.searchForm = this.createForm();
  }

  onSubmit() {
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
