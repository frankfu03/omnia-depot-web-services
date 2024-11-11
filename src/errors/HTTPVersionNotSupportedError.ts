/**
 * The HTTP 505 HTTP Version Not Supported error indicates that the HTTP version
 * used in the request is not supported by the server.
 *
 * It's common to see this error when a request line is improperly formed such
 * as GET /path to resource HTTP/1.1 or with \n terminating the request line
 * instead of \r\n. For example, intermediaries such as load balancers may not
 * handle request lines of a forwarded request as illustrated in the example below.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class HTTPVersionNotSupportedError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 505;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(HTTPVersionNotSupportedError.STATUS_CODE, message, method, url);
    }
}
