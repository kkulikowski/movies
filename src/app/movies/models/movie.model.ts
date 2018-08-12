export interface Movie {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface MovieFiltersState {
  page?: number;
  query?: string;
}

export interface MoviesResponse {
  results: Movie[];
  total_results: number;
  page?: number;
  total_pages?: number;
}
