import * as OpenApiValidator from 'express-openapi-validator';
import type { OpenApiRequestHandler } from 'express-openapi-validator/dist/framework/types';

export const openapiValidatorMiddleware = (apiSpecJson: string): OpenApiRequestHandler[] =>
    OpenApiValidator.middleware({
        apiSpec: apiSpecJson,
        validateApiSpec: false,
        validateRequests: true,
        validateResponses: false,
    });
