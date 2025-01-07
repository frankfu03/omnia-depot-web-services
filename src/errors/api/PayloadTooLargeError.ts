/**
 * The HTTP 413 Content Too Large error indicates that the request entity was
 * larger than limits defined by server. The server might close the connection
 * or return a Retry-After header field.
 *
 * Prior to RFC 9110 the response phrase for the status was Payload Too Large.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class PayloadTooLargeError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 413;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(PayloadTooLargeError.STATUS_CODE, message, method, url);
    }
}
