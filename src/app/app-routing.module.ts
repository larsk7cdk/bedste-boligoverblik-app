import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/no-auth/no-auth.module').then((m) => m.NoAuthModule),
  },
  {
    path: 'boliger',
    loadChildren: () =>
      import('./features/bolig/bolig.module').then((m) => m.BoligModule),
  },
  {
    path: 'laanberegninger',
    loadChildren: () =>
      import('./features/laanberegning/laanberegning.module').then(
        (m) => m.LaanberegningModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
