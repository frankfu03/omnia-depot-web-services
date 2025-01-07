import type { NextFunction, Request, Response } from 'express';

export const responseHeaderMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
): void => {
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('X-Content-Type-Options', 'nosniff');

    const correlationId = request.header('X-Correlation-ID');
    if (correlationId) {
        response.setHeader('X-Request-ID', correlationId);
    }

    const transactionId = request.header('X-Transaction-ID');
    if (transactionId) {
        response.setHeader('X-Request-ID', transactionId);
    }

    const requestId = request.header('X-Request-ID');
    if (requestId) {
        response.setHeader('X-Request-ID', requestId);
    }

    next();
};
