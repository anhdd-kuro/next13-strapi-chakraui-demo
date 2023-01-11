export * from "./post";

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Meta = {
  pagination: Pagination;
};

export type StrapiResponse<T> = {
  data: T;
  meta: Meta;
};
