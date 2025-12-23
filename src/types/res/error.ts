/**
 * Google API エラーレスポンス
 */
export type GoogleApiError = {
    error: {
        code: number;
        message: string;
        status: string;
    };
};

/**
 * Google OAuth エラーレスポンス
 */
export interface GoogleOAuthTokenError {
  error:
  | "invalid_request"
  | "invalid_client"
  | "invalid_grant"
  | "unauthorized_client"
  | "unsupported_grant_type"
  | string;
  error_description?: string;
  error_uri?: string;
}