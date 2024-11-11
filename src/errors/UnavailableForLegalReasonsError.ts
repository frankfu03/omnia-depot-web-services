/**
 * The HTTP 451 Unavailable For Legal Reasons error indicates that the user
 * requested a resource that is not available due to legal reasons, such as
 * a web page for which a legal action has been issued.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class UnavailableForLegalReasonsError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 451;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(UnavailableForLegalReasonsError.STATUS_CODE, message, method, url);
    }
}
