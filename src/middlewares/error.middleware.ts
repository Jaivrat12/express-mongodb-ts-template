import type { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { MongoServerError } from 'mongodb';
import createHttpError from 'http-errors';
import HTTPStatusCodes from '../enums/HTTPStatusCodes.js';
import logger from '../utils/logger.js';

interface ErrorResponse {
    message: string;
    errors: string[];
}

// function customErrorHandler() {}

// function mongodbErrorHandler() {}

// TODO: break this handler into smaller handlers
export default function globalErrorHandler(
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (createHttpError.isHttpError(error)) {
        res.status(error.status).json(error);
    } else if (error instanceof mongoose.Error) {
        const errRes: ErrorResponse = {
            message: error.message,
            errors: [],
        }

        if (error instanceof mongoose.Error.ValidationError) {
            errRes.message = 'Validation Failed';
            Object.values(error.errors).forEach((error) => {
                errRes.errors.push(error.message);
            });
        }

        res.status(HTTPStatusCodes.BadRequest).json(errRes);
    } else if (error instanceof MongoServerError && error.code === 11000) {
        // TODO: handle in UserModel
        res.status(HTTPStatusCodes.BadRequest).json({
            message: `${Object.keys(error.keyPattern)[0]} already exists`,
        });
    } else {
        logger.error(error);
        res.status(HTTPStatusCodes.InternalServerError).json({
            message: 'Something went wrong'
        });
    }
}
