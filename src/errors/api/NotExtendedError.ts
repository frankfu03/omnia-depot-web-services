/**
 * The HTTP 510 Not Extended error is sent when the client request declares an
 * HTTP Extension (RFC 2774) that should be used to process the request, but the
 * extension is not supported.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class NotExtendedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 510;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(NotExtendedError.STATUS_CODE, message, method, url);
    }
}
