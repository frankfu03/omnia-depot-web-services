/**
 * The HTTP 405 Method Not Allowed error indicates that the server knows the
 * request method, but the target resource doesn't support this method. The
 * server must generate an Allow header in a 405 response with a list of methods
 * that the target resource currently supports.
 *
 * Improper server-side permissions set on files or directories may cause a 405
 * response when the request would otherwise be expected to succeed.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class MethodNotAllowedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 405;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(MethodNotAllowedError.STATUS_CODE, message, method, url);
    }
}
