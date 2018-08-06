export interface RestFilter {
  pageSize?: number;
  totalItems?: number;
  totalPages?: number;
  page?: number;
  sortParams?: SortParams;
}

export interface SortParams {
  sortBy: string;
  sortOrder: string;
}
