/**
 * The HTTP 504 Gateway Timeout error indicates that the server, while acting as
 * a gateway or proxy, did not get a response in time from the upstream server
 * in order to complete the request. This is similar to a 502 Bad Gateway,
 * except that in a 504 status, the proxy or gateway did not receive any HTTP
 * response from the origin within a certain time.
 *
 * There are many causes of 504 errors, and fixing such problems likely requires
 * investigation and debugging by server administrators, or the site may work again
 * at a later time. Exceptions are client networking errors, particularly if the
 * service works for other visitors, and if clients use VPNs or other custom networking
 * setups. In such cases, clients should check network settings, firewall setup, proxy
 * settings, DNS configuration, etc.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class GatewayTimeoutError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 504;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(GatewayTimeoutError.STATUS_CODE, message, method, url);
    }
}
