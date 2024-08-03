import createHttpError from 'http-errors';
import expressAsyncHandler from 'express-async-handler';
import UserServices from '../services/user.service.js';
import HTTPStatusCodes from '../enums/HTTPStatusCodes.js';

export const getAllUsers = expressAsyncHandler(async (req, res) => {
    const users = await UserServices.findAll();
    res.json(users);
});

export const getUserById = expressAsyncHandler(async (req, res) => {
    const user = await UserServices.getById(req.params.id);
    if (!user) {
        throw createHttpError(HTTPStatusCodes.NotFound, 'User not found');
    }
    res.json(user);
});

export const createUser = expressAsyncHandler(async (req, res) => {
    const user = await UserServices.create(req.body);
    res.status(HTTPStatusCodes.Created).json(user);
});

export const updateUserById = expressAsyncHandler(async (req, res) => {
    const user = await UserServices.updateById(req.params.id, req.body);
    if (!user) {
        throw createHttpError(HTTPStatusCodes.NotFound, 'User not found');
    }
    res.json(user);
});

export const deleteUserById = expressAsyncHandler(async (req, res) => {
    const user = await UserServices.deleteById(req.params.id);
    if (!user) {
        throw createHttpError(HTTPStatusCodes.NotFound, 'User not found');
    }
    res.json(user);
});
