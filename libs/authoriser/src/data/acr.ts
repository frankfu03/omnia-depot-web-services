/**
 * In OAuth2, the "audience" claim (aud) identifies which application or resource a token is intended for,
 * while the "acr" (authentication context class reference) claim specifies the level of authentication
 * strength used to obtain the token, essentially indicating how strongly the user was verified during
 * login; the audience is about who can use the token, while the acr is about how the user was authenticated.
 */

export const acr = [
    'urn:brasil:openbanking:loa3',
];
