export interface Movie {
  imdbID: number;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface MovieFiltersState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  size?: number;
  page?: number;
  filter?: any;
}

export interface MoviesResponse {
  Response: string;
  Search: Movie[];
  totalResults: string;
}
