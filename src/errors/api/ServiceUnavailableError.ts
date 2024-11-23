/**
 * The HTTP 503 Service Unavailable error indicates that the server is not ready
 * to handle the request.
 *
 * Common causes are that a server is down for maintenance or overloaded. During
 * maintenance, server administrators may temporarily route all traffic to a 503
 * page, or this may happen automatically during software updates. In overload
 * cases, some server-side applications will reject requests with a 503 status
 * when resource thresholds like memory, CPU, or connection pool limits are met.
 * Dropping incoming requests creates backpressure that prevents the server's
 * compute resources from being exhausted, avoiding more severe failures. If
 * requests from specific clients are being restricted due to rate limiting,
 * the appropriate response is 429 Too Many Requests.
 *
 * This response should be used for temporary conditions and the Retry-After HTTP
 * header should contain the estimated time for the recovery of the service, if possible.
 *
 * A user-friendly page explaining the problem should be sent along with this response.
 *
 * Note: Caching-related headers sent with this response require special attention; a 503
 * indicates a temporary issue and responses shouldn't usually be cached as clients may
 * receive outdated error pages after a fix has been deployed.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class ServiceUnavailableError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 503;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(ServiceUnavailableError.STATUS_CODE, message, method, url);
    }
}
