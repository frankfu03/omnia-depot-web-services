export interface IamPolicy {
    principalId: string;
    policyDocument: PolicyDocument;
    contxt?: Context;
    usagePolicyDocumentIdentityKey?: string;
}
