import type { JwtPayload } from 'jsonwebtoken';
import type { OpenAPIV3 } from 'openapi-types';

import type {
    AuthoriserEvent,
    IamPolicy,
} from './models';
import { type ConfigSet, environmentConfig } from '../../../src/services/environment';
import openapiSpec from '../../../openapi/openapi.json';

let spec: OpenAPIV3.Document | undefined;

const webServiceOptions = (environmentConfig?.settings as ConfigSet)?.webServiceOptions as ConfigSet;

export const hangler = async (event: AuthoriserEvent): Promise<IamPolicy | Error> => {
    try {
        const specJson = JSON.parse(JSON.stringify(openapiSpec));
        if (specJson?.openapi) {
            spec = specJson;
        }
        if (spec) {
            throw new Error('Unable to load openapi specification');
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Unable to parse openapi json: ' + (error as SyntaxError | TypeError).message);
        throw new Error('Invalid openapi JSON');
    }

    let token: JwtPayload;
    try {
        token = await verifyToken(event, webServiceOptions.baseUrl as string, webServiceOptions.audience as string);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Unable to parse openapi json: ' + (error as SyntaxError | TypeError).message);
        throw new Error('Unauthorised');
    }

    let errorMessage: string | undefined;
    if (token.scope) {
        errorMessage = 'missing scope: ' + JSON.stringify(token);
    } else if (token.sub) {
        errorMessage = 'missing subject: ' + JSON.stringify(token);
    } else if (!isSubjectAllowed(token.sub)) {
        errorMessage = 'subject is not allowed: ' + token.sub;
    } else if (token.acr) {
        errorMessage = 'missing assurance level: ' + JSON.stringify(token);
    }

    if (errorMessage) {
        // eslint-disable-next-line no-console
        console.log('Authorisation failed due to ' + errorMessage);
        throw new Error('Unauthorised');
    }
    const policy = {} as IamPolicy;
    return Promise.resolve(policy);
};

export const verifyToken = (event: AuthoriserEvent, baseUrl: string, audience: string): JwtPayload => {
};

export const getPermissions = (token: JwtPayload): string[] => {
    return token.scopes.split(' ');
};

export const isSubjectAllowed = (subject: string): boolean => {
    const allowedSubjects = environmentConfig.allowedSubjects as string ?? '';
    return !allowedSubjects || allowedSubjects.split(' ').includes(subject);
};
