/**
 * The HTTP 424 Failed Dependency error indicates that the method could not be
 * performed on the resource because the requested action depended on another
 * action, and that action failed.
 *
 * Regular web servers typically do not return this status code, but some protocols
 * like WebDAV can return it. For example, in WebDAV, if a PROPPATCH request was
 * issued, and one command fails then automatically every other command will also
 * fail with 424 Failed Dependency.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class FailedDependencyError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 424;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(FailedDependencyError.STATUS_CODE, message, method, url);
    }
}
