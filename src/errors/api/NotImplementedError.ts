/**
 * The HTTP 501 Not Implemented error means that the server does not support
 * the functionality required to fulfill the request.
 *
 * A response with this status may also include a Retry-After header, telling
 * the client that they can retry the request after the specified time has elapsed.
 * A 501 response is cacheable by default unless caching headers instruct otherwise.
 *
 * 501 is the appropriate response when the server does not recognize the request
 * method and is incapable of supporting it for any resource. Servers are required
 * to support GET and HEAD, and therefore must not return 501 in response to requests
 * with these methods. If the server does recognize the method, but intentionally
 * does not allow it, the appropriate response is 405 Method Not Allowed.
 *
 * If you have visited a web page and you are seeing 501 errors, these issues
 * require investigation and fixing by server owners or administrators. You can
 * clear your browser cache for the domain, disable proxies if you are using one,
 * or try again later to see if it works as expected.
 *
 * A 501 response can occur if proxies cannot not handle request methods used in
 * the context of HTTP Extension Framework (RFC 2774) applications. This status
 * can also occur in Web Distributed Authoring and Versioning (WebDAV) when a request
 * method (SEARCH, PROPFIND) does not have a URL handler configured to process it.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class NotImplementedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 501;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(NotImplementedError.STATUS_CODE, message, method, url);
    }
}
