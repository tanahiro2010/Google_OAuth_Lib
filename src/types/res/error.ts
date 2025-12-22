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