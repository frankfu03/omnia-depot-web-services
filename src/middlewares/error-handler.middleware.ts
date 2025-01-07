import type { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors';

export const errorHandlerMiddleware = (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
): void => {
    let statusCode = 400;
    if (error instanceof ApiError) {
        statusCode = error.statusCode;
    }

    response.status(statusCode).json({
        message: error.message,
        // errors: error.errors,
    });

    next();
};
