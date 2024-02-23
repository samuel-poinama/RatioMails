import * as msal from '@azure/msal-browser'

export const requestedScopes = {
    scopes: ["Mail.Read"]
}

const logoutRequest = {
    mainWindowRedirectUri: "/",
};

const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8",
        mainWindowRedirectUri: "/"
    },
    cache: {
        cacheLocation: "sessionStorage"
    }
})

msalInstance.initialize();

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
};

export async function signInAndGetUser() {
    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)
    return authResult
}

export async function signOutUser() {
    const authResult = await msalInstance.logoutPopup(logoutRequest)
    return authResult
}