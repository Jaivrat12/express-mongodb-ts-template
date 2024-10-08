import { Router } from 'express';
import {
    createUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUserById,
} from '../controllers/users.js';

const userRoutes = Router();

userRoutes.get('/', getAllUsers);

userRoutes.get('/:id', getUserById);

userRoutes.post('/', createUser);

userRoutes.put('/:id', updateUserById);

userRoutes.delete('/:id', deleteUserById);

export default userRoutes;
