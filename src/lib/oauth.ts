import { GoogleOAuthProvider, GoogleProviderConfig, Authorization } from "@/types";

class OAuth2 implements GoogleOAuthProvider {
    readonly AUTH_BASE_URL  = "https://accounts.google.com/o/oauth2/v2/auth";
    readonly TOKEN_URL      = "https://oauth2.googleapis.com/token";
    readonly PROFILE_URL    = "https://www.googleapis.com/oauth2/v3/userinfo";
    readonly REVOCATION_URL = "https://oauth2.googleapis.com/revoke";

    readonly clientId: Readonly<string>;
    readonly clientSecret: Readonly<string>;
    readonly authorization: Readonly<Authorization>;
    
    accessToken: string | null = null;

    constructor ({ clientId, clientSecret, authorization }: GoogleProviderConfig) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authorization = authorization || {
            params: {
                scope: [
                    "openid",
                    "email",
                    "profile",
                ]
            }
        }
    }

    url({ 
        response_type = "code", 
        redirect_uri  = "postmessage", 
        access_type   = "offline", 
        prompt        = "consent"
    }) {
        const url = new URL(this.AUTH_BASE_URL);
        url.searchParams.append("client_id",     this.clientId);
        url.searchParams.append("response_type", response_type);
        url.searchParams.append("redirect_uri",  redirect_uri);
        url.searchParams.append("scope",         this.authorization.params.scope.join(" "));
        url.searchParams.append("access_type",   access_type);
        url.searchParams.append("prompt",        prompt);
        url.searchParams.append("state",         Math.random().toString(36).substring(2, 15));

        return url.toString();
    }

    async token(code: string, redirect_uri: string = "postmessage") {
        const params = new URLSearchParams();
        params.append("code",          code);
        params.append("client_id",     this.clientId);
        params.append("client_secret", this.clientSecret);
        params.append("redirect_uri",  redirect_uri);
        params.append("grant_type",    "authorization_code");
        const response = await fetch(this.TOKEN_URL, {
            method:  "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:    params.toString()
        });

        const data = await response.json();
        if ('access_token' in data) {
            this.accessToken = data.access_token;
        }

        return data;
    }

    async refresh(refresh_token: string) {
        const params = new URLSearchParams();
        params.append("refresh_token", refresh_token);
        params.append("client_id",     this.clientId);
        params.append("client_secret", this.clientSecret);
        params.append("grant_type",    "refresh_token");
        const response = await fetch(this.TOKEN_URL, {
            method:  "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:    params.toString()
        });
        return await response.json();
    }
}

export default OAuth2;