interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'HGhNNEqsfE6vmVB7mOga7bqkNfIpTonj',
  domain: 'benjam.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
