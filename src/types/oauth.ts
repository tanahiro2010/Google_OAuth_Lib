import type {
    GoogleOAuthTokenResponse,
    GoogleOAuthTokenRefreshResponse,
    GoogleOAuthTokenErrorResponse
} from "./res/token";

/**
 * OAuth 認可URL生成パラメータ
 */
export type LoginURL = {
    response_type?: "code" | "token";
    redirect_uri?: string;
    access_type?: "online" | "offline";
    prompt?: "none" | "consent" | "select_account";
};

/**
 * Google OAuth プロバイダーインターフェース
 */
export type GoogleOAuthProvider = {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly authorization: Readonly<import("./config").Authorization>;

    /**
     * OAuth 認可URLを生成
     */
    url(params: LoginURL): string;

    /**
     * 認可コードをトークンと交換
     */
    token(code: string, redirect_uri?: string): Promise<GoogleOAuthTokenResponse>;

    /**
     * リフレッシュトークンで新しいアクセストークンを取得
     */
    refresh(refresh_token: string): Promise<GoogleOAuthTokenRefreshResponse>;

    /**
     * アクセストークンを取り消し
     */
    revoke(token: string): Promise<boolean>;
};

/**
 * OAuthレスポンスがエラーかどうかを判定
 */
export function isOAuthError(response: GoogleOAuthTokenResponse): response is GoogleOAuthTokenErrorResponse {
    return 'error' in response;
}