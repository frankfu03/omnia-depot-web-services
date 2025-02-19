import dotenv from 'dotenv';
import * as _ from 'lodash';
import fs from 'node:fs';
import path from 'node:path';

import { envVariableMappings } from './environment.config';
import * as appSettingsJson from '../../../data/app-settings.json';
import { DataType, type VariableMap } from '../../models';

export type ConfigSet = Record<string, unknown>;

export class EnvironmentService {
    public readonly ENV_FILE = '../../../config/local.env';
    public configSet: ConfigSet;
    private static instance?: EnvironmentService;

    private constructor(configFile?: string) {

        // Parsing the environment configuration file and store variables to process.env
        const envFilePath = path.resolve(__dirname, this.ENV_FILE);
        dotenv.config({ path: envFilePath });

        // Read and parse the input config json file if provided, otherwise, use the default config json
        if (configFile) {
            const configFilePath = path.resolve(__dirname, configFile);
            const data = fs.readFileSync(configFilePath);
            this.configSet = JSON.parse(data.toString()) as ConfigSet;
        } else {
            this.configSet = _.cloneDeep(appSettingsJson) as ConfigSet;
        }

        // Inject environment variables into specified pathes
        envVariableMappings.forEach((mapping: VariableMap) => {
            const appVariableNames = mapping.appVariableName.split('/');
            const envVariableName = mapping.envVariableName;
            const newValue = this.getEnvVariableValue(envVariableName, mapping.dataType);
            this.injectEnvVariableAndValue(appVariableNames, newValue);
        });
    }

    public static getInstance(configFile?: string): EnvironmentService {
        if (!EnvironmentService.instance) {
            EnvironmentService.instance = new EnvironmentService(configFile);
        }
        return EnvironmentService.instance;
    }

    public get config(): ConfigSet {
        return this.configSet;
    }

    private getEnvVariableValue(envName: string, dataType: DataType): boolean | number | string | undefined {
        const value = process.env[envName];
        if (value === undefined) {
            return undefined;
        }

        let result: number | boolean | string | undefined;
        switch (dataType) {
            case (DataType.Boolean):
                if (typeof value === 'boolean') {
                    result = value;
                } else if (value.toLowerCase() === 'true') {
                    result = true;
                } else if (value.toLowerCase() === 'false') {
                    result = false;
                } else {
                    result = undefined;
                }
                break;
            case (DataType.Number):
                result = typeof value === 'number' ? value : Number(value);
                break;
            case (DataType.String):
                result = typeof value === 'string' ? value : String(value);
                break;
            default:
                result = String(value);
        }

        return result;
    }

    // Inject environment variables and values defined in config/local.env into the configSet object
    // Override the value if path exists, otherwise, add the new path and value.
    private injectEnvVariableAndValue(variableNames: string[], value: boolean | number | string | undefined): void {
        const lastVariable = variableNames.pop();
        if (lastVariable === undefined) {
            return;
        } else if (value === undefined) {
            return;
        }

        let currentConfigPath: ConfigSet = this.configSet;
        variableNames.forEach((variableName: string) => {
            if (!Object.prototype.hasOwnProperty.call(currentConfigPath, variableName)) {
                currentConfigPath[variableName] = {};
            }
            currentConfigPath = currentConfigPath[variableName] as ConfigSet;
        });
        currentConfigPath[lastVariable] = value;
    }
}
