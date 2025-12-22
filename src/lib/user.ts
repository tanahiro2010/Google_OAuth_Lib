import { GoogleUserProvider, GoogleUserProfile, GoogleDetailedUserProfile, GoogleTokenInfo, GoogleApiError } from "@/types";

class User implements GoogleUserProvider {
    private readonly BASIC_PROFILE_URL = "https://www.googleapis.com/oauth2/v2/userinfo";
    private readonly DETAILED_PROFILE_URL = "https://people.googleapis.com/v1/people/me";
    private readonly TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";

    private readonly accessToken: string;
    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    async profile(): Promise<GoogleUserProfile | GoogleApiError> {
        const response = await fetch(this.BASIC_PROFILE_URL, {
            method:  "GET",
            headers: {
                "Authorization": `Bearer ${this.accessToken}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return data as GoogleApiError;
        }

        return data as GoogleUserProfile;
    }

    async detailedProfile(): Promise<GoogleDetailedUserProfile | GoogleApiError> {
        const url = new URL(this.DETAILED_PROFILE_URL);
        url.searchParams.set("personFields", "names,photos,emailAddresses,birthdays");

        const response = await fetch(url.toString(), {
            method:  "GET",
            headers: {
                "Authorization": `Bearer ${this.accessToken}`
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return data as GoogleApiError;
        }

        return data as GoogleDetailedUserProfile;
    }

    async verifyToken(): Promise<GoogleTokenInfo | GoogleApiError> {
        const url = new URL(this.TOKEN_INFO_URL);
        url.searchParams.set("access_token", this.accessToken);

        const response = await fetch(url.toString());
        const data = await response.json();

        if (!response.ok) {
            return data as GoogleApiError;
        }

        return data as GoogleTokenInfo;
    }
}

export default User;