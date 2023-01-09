export * from "./post";

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface StrapiResponse<T> {
  data: T;
  meta: Meta;
}
