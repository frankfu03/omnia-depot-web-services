/**
 * The HTTP 411 Length Required error indicates that the server refused to accept
 * the request without a defined Content-Length header.
 *
 * Note: When sending data in a series of chunks, the Content-Length header is
 * omitted, and at the beginning of each chunk, the length of the current chunk
 * needs to be included in hexadecimal format.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class LengthRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 411;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(LengthRequiredError.STATUS_CODE, message, method, url);
    }
}
