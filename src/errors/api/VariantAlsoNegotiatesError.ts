/**
 * The HTTP 506 Variant Also Negotiates error is returned during content negotiation
 * when there is recursive loop in the process of selecting a resource.
 *
 * Agent-driven content negotiation enables a client and server to collaboratively
 * decide the best variant of a given resource when the server has multiple variants.
 * A server sends a 506 status code due to server misconfiguration that results in
 * circular references when creating responses.
 *
 * Lack of standardization of how clients automatically choose from responses, and
 * the additional round-trips that slow down client-server interaction mean this
 * mechanism is rarely used. Server-driven content negotiation is far more common,
 * where a server directly chooses the most appropriate resource for the client based
 * on the request headers (Accept-Language, Accept, etc.).
 */
import { ApiError, type ApiErrorCode } from '../api-error';

export class VariantAlsoNegotiatesError extends ApiError<ApiErrorCode> {
    public static readonly STATUS_CODE = 506;

    public constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(VariantAlsoNegotiatesError.STATUS_CODE, message, method, url);
    }
}
