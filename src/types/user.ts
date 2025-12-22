import type { GoogleApiError } from "./res/error";

/**
 * Google 基本ユーザー情報
 */
export type GoogleUserProfile = {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: string;
};

/**
 * Google ユーザー情報プロバイダーインターフェース
 */
export type GoogleUserProvider = {
    /**
     * アクセストークンを使用して基本的なユーザー情報を取得
     */
    profile(accessToken: string): Promise<GoogleUserProfile | GoogleApiError>;

    /**
     * People API を使用して詳細なユーザー情報を取得
     */
    detailedProfile(accessToken: string): Promise<GoogleDetailedUserProfile | GoogleApiError>;

    /**
     * アクセストークンの有効性を検証
     */
    verifyToken(accessToken: string): Promise<GoogleTokenInfo | GoogleApiError>;
};

/**
 * Google 詳細ユーザー情報 (People API)
 */
export type GoogleDetailedUserProfile = {
    resourceName?: string;
    names?: Array<{
        displayName?: string;
        givenName?: string;
        familyName?: string;
    }>;
    photos?: Array<{
        url?: string;
    }>;
    emailAddresses?: Array<{
        value?: string;
        type?: string;
        verified?: boolean;
    }>;
    birthdays?: Array<{
        date?: {
            year?: number;
            month?: number;
            day?: number;
        };
    }>;
};

/**
 * Google トークン情報
 */
export type GoogleTokenInfo = {
    azp?: string;
    aud?: string;
    sub?: string;
    scope?: string;
    exp?: string;
    expires_in?: string;
    email?: string;
    email_verified?: string;
    access_type?: string;
};



/**
 * ユーザー情報レスポンスがエラーかどうかを判定
 */
export function isUserApiError(response: GoogleUserProfile | GoogleApiError): response is GoogleApiError {
    return 'error' in response;
}