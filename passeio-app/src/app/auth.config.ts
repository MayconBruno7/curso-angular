import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: '',
  redirectUri: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
  clientId: '',
  scope: '',
  strictDiscoveryDocumentValidation: ,
};
