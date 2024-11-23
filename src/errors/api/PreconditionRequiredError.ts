/**
 * The HTTP 428 Precondition Required error indicates that the server requires
 * the request to be conditional.
 *
 * Typically, a 428 response means that a required precondition header such
 * as If-Match is missing. When a precondition header does not match the
 * server-side state, the response should be 412 Precondition Failed.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class PreconditionRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 428;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(PreconditionRequiredError.STATUS_CODE, message, method, url);
    }
}
