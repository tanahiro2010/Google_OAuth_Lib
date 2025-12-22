# GoogleOAuthLib

[![npm version](https://badge.fury.io/js/google-oauth-lib.svg)](https://badge.fury.io/js/google-oauth-lib)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Node.js向けのGoogle OAuth 2.0認証ライブラリ。TypeScriptで書かれ、完全な型定義を提供します。

## 特徴

- **OAuth 2.0完全対応**: Google OAuthの全機能をサポート（予定）
- **TypeScript対応**: 完全な型定義付きで開発効率向上
- **シンプルなAPI**: 直感的なインターフェース
- **拡張性**: Google APIsへの対応も計画中
- **OSS**: オープンソースでコミュニティ貢献歓迎

## インストール

```bash
npm install google_oauth_provider
```

## クイックスタート

```typescript
import { Google, OAuth2, User } from 'google_oauth_provider';

// 設定
const config = {
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  redirectUri: 'http://localhost:3000/callback'
};

// OAuthインスタンス作成
const oauth = new OAuth2(config);

// 認証URL生成
const authUrl = oauth.getAuthorizationUrl({
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
});

// トークン取得（コールバック後）
const tokens = await oauth.exchangeCodeForTokens(code);

// ユーザー情報取得
const userProvider = new User();
const profile = await userProvider.profile(tokens.access_token);
```

## API リファレンス

### OAuth2

Google OAuth 2.0認証を扱うクラス。

- `getAuthorizationUrl(options)`: 認証URLを生成
- `exchangeCodeForTokens(code)`: 認可コードをトークンと交換
- `refreshAccessToken(refreshToken)`: アクセストークンをリフレッシュ

### User

Googleユーザー情報を取得するクラス。

- `profile(accessToken)`: 基本ユーザー情報を取得
- `detailedProfile(accessToken)`: People APIで詳細情報を取得
- `verifyToken(accessToken)`: トークンの有効性を検証

### Google (メインクラス)

OAuthとUserを統合したメインクラス。

```typescript
const google = Google.OAuth(config);
```

## 設定

```typescript
interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}
```

## 開発

### ビルド

```bash
npm run build
```

### テスト

```bash
npm test
```

## ロードマップ

- [x] OAuth 2.0基本認証
- [ ] OAuth 2.0完全対応（全スコープ、PKCEなど）
- [ ] Google APIs統合（Drive, Gmail, Calendarなど）
- [ ] ドキュメント充実
- [ ] テスト追加

## 貢献

このプロジェクトはOSSです。IssueやPull Requestを歓迎します！

1. Fork
2. Feature branch作成 (`git checkout -b feature/AmazingFeature`)
3. コミット (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Pull Request

## ライセンス

ISC License

## 作者

[tanahiro2010](https://github.com/tanahiro2010)