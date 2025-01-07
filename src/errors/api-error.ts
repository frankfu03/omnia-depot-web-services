/**
 * The base HTTP error class to be implemented by all specific error classes.
 * A list of error classes supported are listed in apiErrorCodeNames below.
 */

export type ApiErrorName = typeof apiErrorCodeNames;
export type ApiErrorCode = keyof ApiErrorName;

export class ApiError<TCode extends ApiErrorCode> extends Error {
    public readonly name: string = 'Http Error';
    public readonly statusCode: TCode;
    public readonly message: string;
    public readonly method?: string;
    public readonly url?: string;

    public constructor(
        statusCode: TCode,
        message: string,
        method?: string,
        url?: string,
    ) {
        super(message);
        this.statusCode = statusCode;
        this.name = apiErrorCodeNames[statusCode];
        this.message = message || `HTTP Error ${statusCode}: ${apiErrorCodeNames[statusCode]}`;
        this.method = method;
        this.url = url;
    }
}

/**
 * Status codes and names of all supported API errors, including Client (4xx) and Server (5xx) errors
 */
export const apiErrorCodeNames = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    425: 'Too Early Error',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    444: 'Connection Closed Without Response',
    451: 'Unavailable For Legal Reasons',
    499: 'Client Closed Request',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    599: 'Network Connect Timeout',
} as const;
