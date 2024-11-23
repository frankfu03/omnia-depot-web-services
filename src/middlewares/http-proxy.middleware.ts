import { createProxyMiddleware } from 'http-proxy-middleware';
/**
 * https://www.npmjs.com/package/http-proxy-middleware
 *
 * HTTP proxy middleware is a tool that allows developers to:
 *     a) Rewrite API paths and incoming request paths,
 *     b) Integrate with backend services,
 *     c) Configure a logger to output information,
 *     d) Proxy WebSockets without an initial HTTP request.
 *
 * Options for createProxyMiddleware:
 *     target: target host to proxy to. (protocol + host)
 *     changeOrigin: for virtual hosted sites
 *     pathFilter: (string, []string, glob, []glob, function)
 *             to include/exclude requests to proxy
 *     pathRewrite: (object/function) rewrite target's url path.
 *             Object-keys will be used as RegExp to match paths.
 *     router: (object/function) re-target option.target for specific requests.
 */

/**
 * @param targetHost target host to proxy to. (protocol + host)
 * @param pathFilter default is to match any path
 * @returns
 */
export const httpProxyMiddleware = (targetHost: string, pathFilter: string | string[] = '**') =>
    createProxyMiddleware({
        target: targetHost,
        changeOrigin: true,
        pathFilter: pathFilter,
    });
