import {map} from 'rxjs/operators';
import { envs } from './../../../envs/envs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Movie, MovieFiltersState, MoviesResponse } from '../models/movie.model';
import { RestFilter } from '../../core/models/rest-filter.model';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  API_KEY = envs.omdbApiKey;
  API_URL = `http://www.omdbapi.com/?apikey=${this.API_KEY}&`;
  constructor(private http: HttpClient) {}

  loadMovies(filter): Observable<MoviesResponse> {
    console.log('filter', filter);
    return this.http.get(this.API_URL, {
      observe: 'body',
      responseType: 'json',
      params: this._setFilters(filter)
    }).pipe(
      map((res: MoviesResponse) => res)
    );
  }

  private _setFilters(filter: any) {
    let params = new HttpParams();
    params = params.append('s', 'matrix');
    //tODO dunno if entry and filters will be needed, ill see when api will start working
    // if (filters.filter) {
    //   Object.getOwnPropertyNames(filters.filter).forEach((key, idx, array) => {
    //     // if value is empty ignore it
    //     if (!filters.filter[key]) return;
    //     params = params.append(key, filters.filter[key]);
    //   });
    // }
    return params;
  }
}
