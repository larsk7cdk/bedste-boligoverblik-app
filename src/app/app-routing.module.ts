import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'boliger',
    loadChildren: () =>
      import('./features/bolig/bolig.module').then((m) => m.BoligModule),
    canLoad: [MsalGuard],
  },
  {
    path: 'laan',
    loadChildren: () =>
      import('./features/laan/laan.module').then((m) => m.LaanModule),
    canLoad: [MsalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
