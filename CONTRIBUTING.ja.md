# GoogleOAuthLib への貢献

GoogleOAuthLib への貢献に興味を持っていただきありがとうございます！ このドキュメントはプロジェクトへの貢献に関するガイドラインを提供します。

## コミットメッセージのガイドライン

コミットメッセージには [Conventional Commits](https://conventionalcommits.org/) 仕様に従います。これにより、明確で一貫したコミット履歴を維持できます。

### 形式

```
<type>[オプションのスコープ]: <説明>

[オプションの本文]

[オプションのフッター]
```

### タイプ

- **feat**: 新機能
- **fix**: バグ修正
- **docs**: ドキュメントのみの変更
- **style**: コードの意味に影響しない変更（空白、フォーマット、セミコロンの欠如など）
- **refactor**: バグ修正や機能追加ではないコード変更
- **test**: 不足しているテストの追加または既存テストの修正
- **chore**: ビルドプロセスまたは補助ツールとライブラリの変更

### 例

```
feat: OAuth2 トークンリフレッシュ機能を追加
fix: ユーザープロフィール解析の問題を解決
docs: API例を含むREADMEを更新
style: prettierでコードをフォーマット
refactor: OAuthフローロジックを簡素化
test: Userクラスのユニットテストを追加
chore: TypeScriptバージョンを更新
```

### 破壊的変更

コミットが破壊的変更を導入する場合、フッターに `BREAKING CHANGE:` を含め、その後に説明を記述します。

```
feat: APIインターフェースを変更

BREAKING CHANGE: `config` パラメータに `clientSecret` が必須になりました
```

### Conventional Commits を使用する理由

- **自動バージョン管理**: `standard-version` のようなツールが自動的にバージョンアップを決定できます。
- **明確な履歴**: 何が変わったか、なぜ変わったかを理解しやすくなります。
- **Changelog**: コミットメッセージから自動的にChangelogを生成できます。

## 開発環境のセットアップ

1. リポジトリをフォーク
2. フォークをクローン: `git clone https://github.com/tanahiro2010/Google_OAuth_Lib`
3. 依存関係をインストール: `npm install`
4. 機能ブランチを作成: `git checkout -b feature/your-feature-name`
5. 変更を行う
6. テストを実行: `npm test`
7. ビルド: `npm run build`
8. 上記のガイドラインに従って変更をコミット
9. ブランチにプッシュ: `git push origin feature/your-feature-name`
10. Pull Request を作成

## コードスタイル

- 新しいコードにはすべてTypeScriptを使用
- 既存のコードスタイルに従う
- パブリックAPIにはJSDocコメントを追加
- 新機能にはテストを書く

## Issue

- 新しいIssueを作成する前に既存のIssueを確認
- 利用可能な場合はIssueテンプレートを使用
- バグの場合は明確な再現手順を提供

貢献いただきありがとうございます！