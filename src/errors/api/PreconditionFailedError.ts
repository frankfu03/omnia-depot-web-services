/**
 * The HTTP 412 Precondition Failed error indicates that access to the target
 * resource was denied. This happens with conditional requests on methods other
 * than GET or HEAD when the condition defined by the If-Unmodified-Since or
 * If-Match headers is not fulfilled. In that case, the request (usually an
 * upload or a modification of a resource) cannot be made and this error
 * response is sent back.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class PreconditionFailedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 412;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(PreconditionFailedError.STATUS_CODE, message, method, url);
    }
}
