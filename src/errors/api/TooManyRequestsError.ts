/**
 * The HTTP 429 Too Many Requests error indicates the client has sent too many
 * requests in a given amount of time. This mechanism of asking the client to
 * slow down the rate of requests is commonly called "rate limiting".
 *
 * A Retry-After header may be included to this response to indicate how long
 * a client should wait before making the request again.
 *
 * Implementations of rate limiting vary; restrictions may be server-wide or per
 * resource. Typically, rate-limiting restrictions are based on a client's IP but
 * can be specific to users or authorized applications if requests are authenticated
 * or contain a cookie.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class TooManyRequestsError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 429;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(TooManyRequestsError.STATUS_CODE, message, method, url);
    }
}
