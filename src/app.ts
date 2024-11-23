import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';

import {
    errorHandlerMiddleware,
    httpProxyMiddleware,
    loggerMiddleware,
    responseHeaderMiddleware,
    openapiValidatorMiddleware,
} from './middlewares';
import { router } from './router';

const app = express();
const apiSpec = path.join(__dirname, './openapi/openapi.yaml');

/**
 * cors middleware simplifies enabling and configuring CORS, allowing you to control
 * resource sharing with fine-grained policies.
 */
app.use(cors());

/**
 * helmet middleware helps improve the security of your web application by setting various
 * HTTP headers. These headers can help protect against a wide range of web vulnerabilities.
 */
app.use(helmet());

/**
 * Configure proxy middleware
 */
const url = 'http://localhost:3000';
app.use('/api', httpProxyMiddleware(url));

/**
 * Express built-in middleware is used for parsing incoming requests with JSON payload
 * and making that data available in the reqest body or further processing within the routes.
 */
app.use(express.json());

/**
 * is used to parse the incoming requests with URL-encoded payloads.
 */
app.use(express.urlencoded({extended: true}));

/**
 * Mapping and update response headers
 */
app.use(responseHeaderMiddleware);

/**
 * Optionally serve the API spec
 */
app.use('/spec', express.static(apiSpec));

/**
 * Validate query inputs against OpenAPI specification
 */
app.use(openapiValidatorMiddleware(apiSpec));

/**
 * Add router middleware
 */
app.use(router);

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, TypeScript + Node.js + Express!');
    next();
});

/**
 * optional step: enable pre-flight request for DELETE request
 *
 * Some CORS requests require an initial OPTIONS request (called the "pre-flight request").
 * To enable pre-flighting, must add a new OPTIONS handler for the route you want to support.
 */
app.options('/products/:id', cors());
app.delete('/products/:id', cors(), (req: Request, res: Response, next: NextFunction) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

/**
 * Log warning and error messages
 */
app.use(loggerMiddleware);

/**
 * mapping all errors of authentication, authorisation and query
 * parameter validation, as well as the errors returned from response.
 */
app.use(errorHandlerMiddleware);

export { app };
