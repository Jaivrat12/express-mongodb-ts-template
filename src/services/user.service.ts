import UserModel, {
    type THydratedUserModel,
    type TUserModel,
} from '../models/User.model.js';
import type CRUD from '../interfaces/CRUD.interface.js';

type TUserCrud = CRUD<TUserModel, THydratedUserModel>;

const UserCrudServices: TUserCrud = {
    async findAll(query = {}, paginationQuery) {
        const users = await UserModel.find(query);
        return {
            docs: users,
            meta: {
                totalDocs: users.length,
                totalPages: 1,
                page: 1,
            },
        };
    },
    async getById(id) {
        return await UserModel.findById(id);
    },
    async create(user) {
        return await UserModel.create(user);
    },
    async updateById(id, update, options = {}) {
        return await UserModel.findByIdAndUpdate(id, update, {
            new: true,
            runValidators: true,
            ...options,
        });
    },
    async deleteById(id) {
        return await UserModel.findByIdAndDelete(id);
    },
};

const UserServices = {
    ...UserCrudServices,
    // add more services here...
};

export default UserServices;
