/**
 * The HTTP 414 URI Too Long error indicates that a URI requested by the client
 * was longer than the server is willing to interpret.
 *
 * There are a few rare conditions when this error might occur:
 *
 *    - a client has improperly converted a POST request to a GET request with
 *      long query information,
 *    - a client has descended into a loop of redirection (for example, a
 *      redirected URI prefix that points to a suffix of itself),
 *    - the server is under attack by a client attempting to exploit potential
 *      security holes.
 *
 * Some systems implement 414 URI Too Long as 414 Request-URI Too Large.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class URITooLongError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 414;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(URITooLongError.STATUS_CODE, message, method, url);
    }
}
