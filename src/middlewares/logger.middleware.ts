import { NextFunction, Request, Response, RequestHandler } from 'express';
import * as moment from 'mini-moment';

export const loggerMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
): void => {
    const timestamp = new moment.default().format('YYYY-MM-DD HH:mm:ss');
    const message = request.protocol.toUpperCase() + ' '
        + request.method.toUpperCase() + ' ' + request.url;
    console.log(timestamp + ' ' + message);

    response.on('finish', (): void => {
        const msg = 'Sending response: ' + response.statusCode + ' '
            + response.statusMessage + ', Content-YPE='
            + response.getHeader('Content-Type');

        if (response.statusCode >= 200 && response.statusCode < 300) {
            console.info(timestamp + ' ' + msg);
        } else if (response.statusCode >= 300 && response.statusCode < 400) {
            console.warn(timestamp + ' ' + msg);
        } else if (response.statusCode >= 400) {
            console.error(timestamp + ' ' + msg);
        }
    });

    next();
};
