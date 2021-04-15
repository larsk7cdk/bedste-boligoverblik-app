import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'boliger',
    loadChildren: () =>
      import('./features/bolig/bolig.module').then((m) => m.BoligModule),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./features/info/info.module').then((m) => m.InfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
