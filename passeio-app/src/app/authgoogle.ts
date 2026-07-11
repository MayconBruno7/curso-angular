import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authgoogle {
  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any | null>(null);

  constructor() {
    this.initConfiguration();
  }

  initConfiguration() {
    this.oauthService.configure(authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        this.profile.set(this.oauthService.getIdentityClaims());
      }
    });
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.profile.set(null);
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getLoggedProfile() {
    this.profile.set(this.oauthService.getIdentityClaims());
    return !!this.profile();
  }
}
