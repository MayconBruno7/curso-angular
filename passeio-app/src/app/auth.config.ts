import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
  clientId: '370110266165-839hfck6g8cbl4698dco3rpvgvtgom0g.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
