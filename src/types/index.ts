/**
 * Google OAuth ライブラリの型定義
 * @packageDocumentation
 */

// 設定関連
export type { GoogleProviderConfig, Authorization } from "./config";

// OAuth関連
export type {
    GoogleOAuthProvider,
    LoginURL,
} from "./oauth";
export type {
    GoogleOAuthTokenResponse,
    GoogleOAuthTokenAuthorizationCodeResponse,
    GoogleOAuthTokenRefreshResponse,
    GoogleOAuthTokenErrorResponse
} from "./res/token";

// ユーザー関連
export type { GoogleUserProvider, GoogleUserProfile, GoogleDetailedUserProfile, GoogleTokenInfo } from "./user";

// スコープ関連
export type { GoogleScope } from "./scopes";

// 
export type { GoogleApiError } from "./res/error";

// ユーティリティ関数
export { isOAuthError } from "./oauth";
export { isUserApiError } from "./user";