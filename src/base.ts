import { GoogleProviderConfig } from "@/types";
import OAuth2 from "./lib/oauth";
import User from "./lib/user";

class Google {
    oauth: OAuth2;
    constructor(oauth: OAuth2) {
        this.oauth = oauth;
    }
    static OAuth(config: GoogleProviderConfig) {
        return new Google(new OAuth2(config));
    }

    get user() {
        if (!this.oauth.accessToken) {
            throw new Error("Access token is not set. Please set the access token before accessing user information.");
        }
        return new User(this.oauth.accessToken)
    }

    set accessToken(token: string) {
        this.oauth.accessToken = token;
    }
}

export default Google;