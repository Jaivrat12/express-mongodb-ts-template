import {
    Schema,
    model,
    type HydratedDocumentFromSchema,
    type InferSchemaType,
} from 'mongoose';
import validators from '../utils/validators.js';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validators.email,
    },
    dob: {
        type: Date,
        default: null,
    },
});

const UserModel = model('User', userSchema);
export default UserModel;

export type TUserModel = InferSchemaType<typeof userSchema>;
export type THydratedUserModel = HydratedDocumentFromSchema<typeof userSchema>;
