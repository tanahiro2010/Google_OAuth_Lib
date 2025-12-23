/**
 * Google OAuth トークンレスポンスの共通フィールド
 */
export interface GoogleOAuthTokenBase {
  access_token: string;
  expires_in: number; // 秒
  scope?: string;
  token_type: "Bearer";
}

/**
 * 認可コード (authorization_code) 交換成功時のレスポンス
 * 初回 or consent 時のみ refresh_token / id_token が含まれる
 */
export interface GoogleOAuthTokenAuthorizationCodeResponse
  extends GoogleOAuthTokenBase {
  grant_type: "authorization_code"; // アプリ内部用 discriminant
  refresh_token?: string;
  id_token?: string;
}

/**
 * refresh_token 使用時のレスポンス
 * 注意: refresh_token / id_token は含まれない
 */
export interface GoogleOAuthTokenRefreshResponse
  extends GoogleOAuthTokenBase {
  grant_type: "refresh_token"; // アプリ内部用 discriminant
}

/**
 * Google OAuth トークンレスポンス（完全版 Union）
 */
export type GoogleOAuthTokenResponse =
  | GoogleOAuthTokenAuthorizationCodeResponse
  | GoogleOAuthTokenRefreshResponse