/**
 * The HTTP 401 Unauthorized error indicates that a request was not successful
 * because it lacks valid authentication credentials for the requested resource.
 * This status code is sent with an HTTP WWW-Authenticate response header that
 * contains information on the authentication scheme the server expects the client
 * to include to make the request successfully.
 *
 * A 401 Unauthorized is similar to the 403 Forbidden response, except that a 403
 * is returned when a request contains valid credentials, but the client does not
 * have permissions to perform a certain action.
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class UnauthorizedError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 401;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(UnauthorizedError.STATUS_CODE, message, method, url);
    }
}
