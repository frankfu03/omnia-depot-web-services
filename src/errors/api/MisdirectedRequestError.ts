/**
 * The HTTP 421 Misdirected Request error indicates that the request was directed
 * to a server that is not able to produce a response. This can be sent by a server
 * that is not configured to produce responses for the combination of scheme and
 * authority that are included in the request URI.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class MisdirectedRequestError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 421;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(MisdirectedRequestError.STATUS_CODE, message, method, url);
    }
}
