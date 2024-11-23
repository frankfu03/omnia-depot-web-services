/**
 * The HTTP 423 Locked error indicates that a resource is locked and can't be
 * accessed. Its response body should contain information in WebDAV's XML format.
 *
 * Note: The ability to lock a resource to prevent conflicts is specific to some
 * WebDAV servers. Browsers accessing web pages will never encounter this status
 * code; in the erroneous cases it happens, they will handle it as a generic 400
 * status code.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class LockedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 423;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(LockedError.STATUS_CODE, message, method, url);
    }
}
