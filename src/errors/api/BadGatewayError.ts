/**
 * The HTTP 502 Bad Gateway error indicates that a server was acting as a gateway
 * or proxy and that it received an invalid response from the upstream server.
 *
 * This response is similar to a 500 Internal Server Error response in the sense
 * that it is a generic "catch-call" for server errors. The difference is that it
 * is specific to the point in the request chain that the error has occurred. If
 * the origin server sends a valid HTTP error response to the gateway, the response
 * should be passed on to the client instead of a 502 to make the failure reason
 * transparent. If the proxy or gateway did not receive any HTTP response from the
 * origin, it instead sends a 504 Gateway Timeout to the client.
 *
 * There are many causes of 502 errors, and fixing such problems probably requires
 * investigation by server owners or administrators. Exceptions are client networking
 * errors, particularly if the service works for other visitors, and if clients use
 * VPNs or other custom networking setups. In such cases, clients should check network
 * settings, firewall setup, proxy settings, DNS configuration, etc.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class BadGatewayError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 502;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(BadGatewayError.STATUS_CODE, message, method, url);
    }
}
