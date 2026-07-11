import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'paginas',
    loadChildren: () =>
      import('./template/template-routing-module').then((m) => m.TemplateRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
