/**
 * The HTTP 425 Too Early error indicates that the
 * server was unwilling to risk processing a request that might be replayed to
 * avoid potential replay attacks.
 *
 * If a client has interacted with a server recently, early data (also known as
 * zero round-trip time (0-RTT) data) allows the client to send data to a server
 * in the first round trip of a connection, without waiting for the TLS handshake
 * to complete. A client that sends a request in early data does not need to
 * include the Early-Data header.
 */
import { ApiError, ApiErrorCode } from "../api-error";

export class TooEarlyError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 425;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(TooEarlyError.STATUS_CODE, message, method, url);
    }
}
