/**
 * Google API スコープの型定義
 * @see https://developers.google.com/identity/protocols/oauth2/scopes
 */
export type GoogleScope =
    // OpenID Connect
    | "openid"
    | "email"
    | "profile"
    // Gmail
    | "https://www.googleapis.com/auth/gmail.readonly"
    | "https://www.googleapis.com/auth/gmail.modify"
    | "https://www.googleapis.com/auth/gmail.compose"
    | "https://www.googleapis.com/auth/gmail.send"
    | "https://www.googleapis.com/auth/gmail.insert"
    | "https://www.googleapis.com/auth/gmail.labels"
    | "https://www.googleapis.com/auth/gmail.metadata"
    | "https://www.googleapis.com/auth/gmail.settings.basic"
    | "https://www.googleapis.com/auth/gmail.settings.sharing"
    | "https://www.googleapis.com/auth/gmail.addons.current.action.compose"
    | "https://www.googleapis.com/auth/gmail.addons.current.message.action"
    | "https://www.googleapis.com/auth/gmail.addons.current.message.metadata"
    | "https://www.googleapis.com/auth/gmail.addons.current.message.readonly"
    // Drive
    | "https://www.googleapis.com/auth/drive"
    | "https://www.googleapis.com/auth/drive.file"
    | "https://www.googleapis.com/auth/drive.readonly"
    | "https://www.googleapis.com/auth/drive.metadata.readonly"
    | "https://www.googleapis.com/auth/drive.appdata"
    | "https://www.googleapis.com/auth/drive.photos.readonly"
    // Calendar
    | "https://www.googleapis.com/auth/calendar"
    | "https://www.googleapis.com/auth/calendar.events"
    | "https://www.googleapis.com/auth/calendar.readonly"
    // Contacts
    | "https://www.googleapis.com/auth/contacts"
    | "https://www.googleapis.com/auth/contacts.readonly"
    // People API
    | "https://www.googleapis.com/auth/userinfo.email"
    | "https://www.googleapis.com/auth/userinfo.profile"
    // Admin
    | "https://www.googleapis.com/auth/admin.directory.user"
    | "https://www.googleapis.com/auth/admin.directory.group"
    // Cloud Platform
    | "https://www.googleapis.com/auth/cloud-platform";