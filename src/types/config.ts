import type { GoogleScope } from "./scopes";

/**
 * Google OAuth 設定
 */
export type GoogleProviderConfig = {
    /** Google OAuth Client ID */
    clientId: string;
    /** Google OAuth Client Secret */
    clientSecret: string;
    /** OAuth 認可パラメータ */
    authorization?: Authorization;
};

/**
 * OAuth 認可設定
 */
export type Authorization = {
    params: {
        /** リクエストするスコープ */
        scope: GoogleScope[];
    };
};