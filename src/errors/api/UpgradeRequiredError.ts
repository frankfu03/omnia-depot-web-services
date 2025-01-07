/**
 * The HTTP 426 Upgrade Required error indicates that the server refused to perform
 * the request using the current protocol but might be willing to do so after the
 * client upgrades to a different protocol.
 *
 * The server sends an Upgrade header with this response to indicate the required protocol(s).
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class UpgradeRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 426;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(UpgradeRequiredError.STATUS_CODE, message, method, url);
    }
}
