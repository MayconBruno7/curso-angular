import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profle.module';
import { Authgoogle } from '../authgoogle';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit {
  profile?: Profile;
  loggedIn = false;

  constructor(
    private router: Router,
    private loginService: Authgoogle,
  ) {}

  ngOnInit(): void {
    this.atualizarEstado();
  }

  private atualizarEstado(): void {
    const profile = this.loginService.profile();
    this.profile = (profile as Profile | undefined) ?? undefined;
    this.loggedIn = this.loginService.isLoggedIn() || !!this.profile;
  }

  navegar(): void {
    if (!this.loggedIn) {
      return;
    }

    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(): void {
    this.loginService.login();
    this.atualizarEstado();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
