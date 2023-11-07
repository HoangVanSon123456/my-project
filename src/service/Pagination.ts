export interface Paging {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPage: number;
}

export const PAGINATION = {
  pageNumber: 1,
  pageSize: 1,
  totalElements: 0,
  totalPage: 1,
};

export interface BaseSearch {
  page?: number;
  value?: string;
}
