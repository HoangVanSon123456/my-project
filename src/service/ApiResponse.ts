export interface Paging {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPage: number;
}

export interface DataListResponse<T> {
  data: T[];
  pageableInfo: Paging;
}

export interface ApiResponse<T> {
  data: T;
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
}
