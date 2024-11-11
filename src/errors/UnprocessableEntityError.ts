/**
 * The HTTP 422 Unprocessable Content error indicates that the server understood
 * the content type of the request content, and the syntax of the request content
 * was correct, but it was unable to process the contained instructions.
 *
 * Clients that receive a 422 response should expect that repeating the request
 * without modification will fail with the same error.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class UnprocessableEntityError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 422;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(UnprocessableEntityError.STATUS_CODE, message, method, url);
    }
}
