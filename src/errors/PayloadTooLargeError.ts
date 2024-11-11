/**
 * The HTTP 413 Content Too Large error indicates that the request entity was
 * larger than limits defined by server. The server might close the connection
 * or return a Retry-After header field.
 *
 * Prior to RFC 9110 the response phrase for the status was Payload Too Large.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class PayloadTooLargeError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 413;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(PayloadTooLargeError.STATUS_CODE, message, method, url);
    }
}
