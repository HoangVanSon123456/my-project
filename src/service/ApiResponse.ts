export interface DataListResponse<T> {
  data: T[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
}

export interface ApiResponse<T> {
  data: T;
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
}
