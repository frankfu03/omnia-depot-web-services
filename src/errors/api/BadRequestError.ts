/**
 * The HTTP 400 Bad Request error indicates that the server would not process
 * the request due to something the server considered to be a client error.
 * The reason for a 400 response is typically due to malformed request syntax,
 * invalid request message framing, or deceptive request routing.
 *
 * Clients that receive a 400 response should expect that repeating the request
 * without modification will fail with the same error.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class BadRequestError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 400;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(BadRequestError.STATUS_CODE, message, method, url);
    }
}
