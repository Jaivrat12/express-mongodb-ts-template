export interface PaginationQuery<T> {
    search: string;
    limit: number;
    page: number;
    sort: string;
    sortBy: 'asc' | 'desc';
    filters: Partial<T>;
}
