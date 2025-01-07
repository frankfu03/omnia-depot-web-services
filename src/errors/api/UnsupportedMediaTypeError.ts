/**
 * The HTTP 415 Unsupported Media Type error indicates that the server refused to
 * accept the request because the message content format is not supported.
 *
 * The format problem might be due to the request's indicated Content-Type or
 * Content-Encoding, or as a result of processing the request message content.
 * Some servers may be strict about the expected Content-Type of requests.
 * For example, sending UTF8 instead of UTF-8 to specify the UTF-8 charset may
 * cause the server to consider the media type invalid.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class UnsupportedMediaTypeError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 415;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(UnsupportedMediaTypeError.STATUS_CODE, message, method, url);
    }
}
