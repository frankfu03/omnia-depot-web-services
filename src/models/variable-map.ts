import type { DataType } from './data-type';

export interface VariableMap {
    appVariableName: string;
    envVariableName: string;
    dataType: DataType;
    defaultValue?: string;
}
