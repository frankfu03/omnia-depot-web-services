/**
 * The HTTP 409 Conflict error indicates a request conflict with the current
 * state of the target resource.
 *
 * In WebDAV remote web authoring, 409 conflict responses are errors sent to the
 * client so that a user might be able to resolve a conflict and resubmit the request.
 * For example, conflicts occur if a request to create collection /a/b/c/d/ is made,
 * and /a/b/c/ does not exist, the request must fail with a 409. Additionally, you
 * may get a 409 response when uploading a file that is older than the existing one
 * on the server, resulting in a version control conflict.
 *
 * In other systems, 409 responses may be used for implementation-specific purposes,
 * such as to indicate that the server has received multiple requests to update the
 * same resource.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class ConflictError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 409;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(ConflictError.STATUS_CODE, message, method, url);
    }
}
