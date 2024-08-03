import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import { PaginationQuery } from './index.js';

export default interface CRUD<Model, HydratedModel> {
    findAll: (
        query?: FilterQuery<Model>,
        paginationQuery?: Partial<PaginationQuery<Model>>
    ) => Promise<{
        docs: Array<HydratedModel>;
        meta: {
            totalDocs: number;
            totalPages: number;
            page: number;
        };
    }>;

    getById: (id: string) => Promise<HydratedModel | null>;

    create: (doc: Model) => Promise<HydratedModel>;

    updateById: (
        id: string,
        update: UpdateQuery<Model>,
        options?: QueryOptions<Model>
    ) => Promise<HydratedModel | null>;

    deleteById: (id: string) => Promise<HydratedModel | null>;
}
