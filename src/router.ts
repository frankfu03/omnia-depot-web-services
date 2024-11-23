import {  NextFunction, Request, Response, Router } from 'express';

export const router = Router();

router.get('/products', (
        request: Request,
        response: Response,
        next: NextFunction
    ): void => {
        response.status(200).json({result: 'OK'});
        next();
    }
);
