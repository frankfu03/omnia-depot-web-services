/**
 * The HTTP 508 Loop Detected error indicates that the entire operation failed
 * because it encountered an infinite loop while processing a request with
 * Depth: infinity.
 *
 * The status may be given in the context of the Web Distributed Authoring and
 * Versioning (WebDAV). It was introduced as a fallback for cases where WebDAV
 * clients do not support 208 Already Reported responses (when requests do not
 * explicitly include a DAV header).
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class LoopDetectedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 508;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(LoopDetectedError.STATUS_CODE, message, method, url);
    }
}
