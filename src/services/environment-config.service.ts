import * as _ from 'lodash';
import path from "path";
import dotenv from "dotenv";

import { VariableMapping } from "../models/variable-mapping";
import { Env_App_Variable_Mappings } from "./env-app-variable-mappings";
import * as configJson from '../../config/config.json';
import { DataType } from '../models/data-type';

export interface ConfigSet {
    [key: string]: any;
}

export class EnvironmentConfigService {
    public readonly ENV_FILE = '../../config/local.env';
    public configSet: ConfigSet;
    private static instance?: EnvironmentConfigService;

    private constructor() {
        // Parsing the env file and store variables to process.env
        const envFilePath = path.resolve(__dirname, "../config/config.env");
        dotenv.config({ path: envFilePath });

        // parse the application's config.json
        this.configSet = JSON.parse(JSON.stringify(configJson)) as ConfigSet;

        // Inject environment variables into
        Env_App_Variable_Mappings.forEach((variableMapping: VariableMapping) => {
            const appVariableNames = variableMapping.appVariableName.split('/');
            const envVariableName = variableMapping.envVariableName;
            const value = this.getEnvironmentValue(envVariableName, variableMapping.dataType);
            if (value !== undefined) {
                if (_.has(this.configSet, appVariableNames)) {
                    _.set(this.configSet, appVariableNames, value);
                } else {
                    this.injectEnvVariableAndValue(appVariableNames, value);
                }
            }
        });
    }

    public getInstance(): EnvironmentConfigService {
        if (!EnvironmentConfigService.instance) {
            EnvironmentConfigService.instance = new EnvironmentConfigService();
        }
        return EnvironmentConfigService.instance;
    }

    private getEnvironmentValue(variableName: string, dataType: DataType): boolean | number | string | undefined {
        const value = process.env[variableName];
        if (value === undefined) {
            return undefined;
        }
        switch (dataType) {
            case(DataType.Boolean):
                return typeof value === 'boolean' ? value : Boolean(value);
            case(DataType.Number):
                return typeof value === 'number' ? value : Number(value);
            default:
                return value;
        }
    }

    // Inject environment variables into configSet based on nested path structure
    private injectEnvVariableAndValue(variableNames: string[], value: boolean | number | string): void {
        const lastVariable = variableNames.pop();
        if (lastVariable === undefined) {
            return;
        }
        let newConfigSet = _.cloneDeep(this.configSet);
        variableNames.forEach((variableName: string) => {
            if (newConfigSet.hasOwnProperty(variableName)) {
                newConfigSet = this.configSet[variableName];
            } else {
                this.configSet[variableName] = {};
            }
        });
        newConfigSet[lastVariable] = value;
    }
}
