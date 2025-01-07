import { type NextFunction, type Request, type Response, RequestHandler } from 'express';
import * as moment from 'mini-moment';

export const loggerMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
): void => {
    const timestamp = new moment.default().format('YYYY-MM-DD HH:mm:ss');
    const message = request.protocol.toUpperCase() + ' '
        + request.method.toUpperCase() + ' ' + request.url;
    // eslint-disable-next-line no-console
    console.log(timestamp + ' ' + message);

    response.on('finish', (): void => {
        const msg = 'Sending response: ' + response.statusCode + ' '
            + response.statusMessage + ', Content-YPE='
            + response.getHeader('Content-Type');

        if (response.statusCode >= 200 && response.statusCode < 300) {
            // eslint-disable-next-line no-console
            console.info(timestamp + ' ' + msg);
        } else if (response.statusCode >= 300 && response.statusCode < 400) {
            // eslint-disable-next-line no-console
            console.warn(timestamp + ' ' + msg);
        } else if (response.statusCode >= 400) {
            // eslint-disable-next-line no-console
            console.error(timestamp + ' ' + msg);
        }
    });

    next();
};
