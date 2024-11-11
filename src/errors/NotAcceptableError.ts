/**
 * The HTTP 406 Not Acceptable error indicates that the server could not produce
 * a response matching the list of acceptable values defined in the request's
 * proactive content negotiation headers and that the server was unwilling to
 * supply a default representation.
 *
 * Proactive content negotiation headers include:
 *     - Accept
 *     - Accept-Encoding
 *     - Accept-Language
 *
 * A server may return responses that differ from the request's accept headers.
 * In such cases, a 200 response with a default resource that doesn't match the
 * client's list of acceptable content negotiation values may be preferable to
 * sending a 406 response.
 *
 * If a server returns a 406, the body of the message should contain the list
 * of available representations for the resource, allowing the user to choose,
 * although no standard way for this is defined.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class NotAcceptableError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 406;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(NotAcceptableError.STATUS_CODE, message, method, url);
    }
}
