import type { DataType } from './data-type';

export interface VariableMapping {
    appVariableName: string;
    envVariableName: string;
    dataType: DataType;
    defaultValue?: string;
}
