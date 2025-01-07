/**
 * The HTTP 416 Range Not Satisfiable error indicates that a server could not
 * serve the requested ranges. The most likely reason for this response is that
 * the document doesn't contain such ranges, or that the Range header value,
 * though syntactically correct, doesn't make sense.
 *
 * The 416 response message should contain a Content-Range indicating an unsatisfied
 * range (that is a '*') followed by a '/' and the current length of the resource,
 * e.g., Content-Range: bytes * /12777
 *
 * When encountering this error, browsers typically either abort the operation
 * (for example, a download will be considered non-resumable) or request the whole
 * document again without ranges.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class RangeNotSatisfiableError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 416;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(RangeNotSatisfiableError.STATUS_CODE, message, method, url);
    }
}
