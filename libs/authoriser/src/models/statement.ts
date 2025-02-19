export interface Statement {
    Action: string;
    Effect: string;
    Resource?: string | string[];
    NotResource?: string | string[];
}
