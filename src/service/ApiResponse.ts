export interface DataListResponse<T> {
  data: T[];
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
}
