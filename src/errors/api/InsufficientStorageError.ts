/**
 * The HTTP 507 Insufficient Storage error indicates that an action could not
 * be performed because the server does not have enough available storage to
 * successfully complete the request.
 *
 * This status code was first used in the context of Web Distributed Authoring
 * and Versioning (WebDAV), but has propagated into other use cases to describe
 * situations where server resources are exhausted. Common causes of this error
 * can be from server directories running out of available space, not enough
 * available RAM for an operation, or internal limits reached (such as application-specific
 * memory limits, for example). The request causing this error does not necessarily
 * need to include content, as it may be a request that would create a resource
 * on the server if it was successful.
 *
 * This issue is considered temporary, as opposed to a 413 Content Too Large,
 * which indicates that the client request is too large for the server to process
 * regardless of server resource constraints.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class InsufficientStorageError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 507;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(InsufficientStorageError.STATUS_CODE, message, method, url);
    }
}
