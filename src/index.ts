// src/lib/google/index.ts
export { default as Google } from "./base";
export { default as OAuth2 } from "./oauth";
export { default as User } from "./user";
// export { default as User } from "./user"; // 実装後 ← コメント解除
export type { GoogleProviderConfig, GoogleOAuthProvider } from "@/types";