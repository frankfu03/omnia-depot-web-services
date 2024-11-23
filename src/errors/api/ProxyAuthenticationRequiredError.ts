/**
 * The HTTP 407 Proxy Authentication Required error indicates that the request
 * did not succeed because it lacks valid authentication credentials for the
 * proxy server that sits between the client and the server with access to the
 * requested resource.
 *
 * This response is sent with a Proxy-Authenticate header that contains information
 * on how to correctly authenticate requests. The client may repeat the request with
 * a new or replaced Proxy-Authorization header field.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class ProxyAuthenticationRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 407;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(ProxyAuthenticationRequiredError.STATUS_CODE, message, method, url);
    }
}
