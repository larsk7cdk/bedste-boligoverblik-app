import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';

const routes: Routes = [
  {
    path: 'oversigt',
    component: BoligOversigtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoligRoutingModule {}
