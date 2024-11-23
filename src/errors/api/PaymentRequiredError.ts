/**
 * The HTTP 402 Payment Required error is a nonstandard response status code
 * reserved for future use.
 *
 * This status code was created to enable digital cash or (micro) payment
 * systems and would indicate that requested content is not available until
 * the client makes a payment. No standard use convention exists and different
 * systems use it in different contexts.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class PaymentRequiredError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 402;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(PaymentRequiredError.STATUS_CODE, message, method, url);
    }
}
