export interface Paging {
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
}

export interface DataListResponse<T> {
  items: T[];
  pagination: Paging;
}
