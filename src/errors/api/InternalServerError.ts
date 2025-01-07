/**
 * The HTTP 500 Internal Server Error error indicates that the server encountered
 * an unexpected condition that prevented it from fulfilling the request. This
 * error is a generic "catch-all" response to server issues, indicating that the
 * server cannot find a more appropriate 5XX error to respond with.
 *
 * If you're a visitor seeing 500 errors on a web page, these issues require
 * investigation by server owners or administrators. There are many possible
 * causes of 500 errors, including: improper server configuration, out-of-memory
 * (OOM) issues, unhandled exceptions, improper file permissions, or other complex
 * factors. Server administrators may proactively log occurrences of server error
 * responses, like the 500 status code, with details about the initiating requests
 * to improve the stability of a service in the future.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class InternalServerError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 500;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(InternalServerError.STATUS_CODE, message, method, url);
    }
}
