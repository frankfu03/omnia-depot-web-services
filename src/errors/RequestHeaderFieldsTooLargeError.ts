/**
 * The HTTP 431 Request Header Fields Too Large error indicates that the server
 * refuses to process the request because the request's HTTP headers are too long.
 * The request may be resubmitted after reducing the size of the request headers.
 *
 * 431 can be used when the total size of request headers is too large or when a
 * single header field is too large. To help clients running into this error,
 * indicate which of the two is the problem in the response body and, ideally,
 * say which headers are too large. This lets people attempt to fix the problem,
 * such as by clearing cookies.
 *
 * Servers will often produce this status if:
 *     - The Referer URL is too long
 *     - There are too many Cookies sent in the request
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class RequestHeaderFieldsTooLargeError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 431;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(RequestHeaderFieldsTooLargeError.STATUS_CODE, message, method, url);
    }
}
