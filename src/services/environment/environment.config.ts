import { DataType, type VariableMap } from '../../models';
import { type ConfigSet, EnvironmentService } from './environment.service';

export const envVariableMappings: VariableMap[] = [
    {
        appVariableName: 'projectName',
        envVariableName: 'PROJECT_NAME',
        dataType: DataType.String,
    },
    {
        appVariableName: 'version',
        envVariableName: 'PROJECT_VERSION',
        dataType: DataType.String,
    },
    {
        appVariableName: 'production',
        envVariableName: 'PRODUCTION',
        dataType: DataType.Boolean,
    },
    {
        appVariableName: 'env',
        envVariableName: 'ENVIRONMENT',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/loggerLevel',
        envVariableName: 'LOGGER_LEVEL',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/authOptions/disableAccessTokenCheck',
        envVariableName: 'DISABLE_ACCESS_TOKEN_CHECK',
        dataType: DataType.Boolean,
    },
    {
        appVariableName: 'settings/authOptions/authUrl',
        envVariableName: 'AUTH_URL',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/webServiceOptions/baseUrl',
        envVariableName: 'WEB_SERVICE_BASE_URL',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/webServiceOptions/port',
        envVariableName: 'WEB_SERVICE_PORT',
        dataType: DataType.Number,
    },
    {
        appVariableName: 'settings/webServiceOptions/timeout',
        envVariableName: 'WEB_SERVICE_TIMEOUT',
        dataType: DataType.Number,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/useProxy',
        envVariableName: 'USE_PROXY',
        dataType: DataType.Boolean,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/protocol',
        envVariableName: 'PROXY_PROTOCOL',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/host',
        envVariableName: 'PROXY_HOST',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/port',
        envVariableName: 'PROXY_PORT',
        dataType: DataType.Number,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/username',
        envVariableName: 'PROXY_USERNAME',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/webServiceOptions/proxy/password',
        envVariableName: 'PROXY_PASSWORD',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/name',
        envVariableName: 'DATABASE_NAME',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/schema',
        envVariableName: 'DATABASE_SCHEMA',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/hostEndpoint',
        envVariableName: 'DATABASE_HOST_ENDPOINT',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/hostPort',
        envVariableName: 'DATABASE_HOST_PORT',
        dataType: DataType.Number,
    },
    {
        appVariableName: 'settings/databaseOptions/username',
        envVariableName: 'DATABASE_USERNAME',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/password',
        envVariableName: 'DATABASE_PASSWORD',
        dataType: DataType.String,
    },
    {
        appVariableName: 'settings/databaseOptions/passwordEncripted',
        envVariableName: 'DATABASE_PASSWORD_ENCRIPTED',
        dataType: DataType.Boolean,
    },
    {
        appVariableName: 'settings/systemTest/skip',
        envVariableName: 'SKIP_SYSTEM_TEST',
        dataType: DataType.Boolean,
    },
    {
        appVariableName: 'settings/systemTest/level',
        envVariableName: 'SYSTEM_TEST_LEVEL',
        dataType: DataType.String,
    },
];

// For global use
export const environmentConfig: ConfigSet = EnvironmentService.getInstance().config;
