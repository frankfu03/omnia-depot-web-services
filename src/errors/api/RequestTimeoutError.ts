/**
 * The HTTP 408 Request Timeout error indicates that the server would like to shut
 * down this unused connection. A 408 is sent on an idle connection by some servers,
 * even without any previous request by the client.
 *
 * A server should send the Connection: close header field in the response, since 408
 * implies that the server has decided to close the connection rather than continue waiting.
 *
 * This response is used much more since some browsers, like Chrome and Firefox,
 * use HTTP pre-connection mechanisms to speed up surfing.
 *
 * Note: Some servers will shut down a connection without sending this message.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class RequestTimeoutError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 408;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(RequestTimeoutError.STATUS_CODE, message, method, url);
    }
}
