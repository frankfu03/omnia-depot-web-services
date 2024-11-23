/**
 * The HTTP 511 Network Authentication Required error indicates that the client
 * needs to authenticate to gain network access. This status is not generated
 * by origin servers, but by intercepting proxies that control access to a network.
 *
 * Network operators sometimes require some authentication, acceptance of terms,
 * or other user interaction before granting access (for example in an internet
 * café or at an airport). They often identify clients who have not done so using
 * their Media Access Control (MAC) addresses.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class NetworkAuthenticationRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 511;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(NetworkAuthenticationRequiredError.STATUS_CODE, message, method, url);
    }
}
