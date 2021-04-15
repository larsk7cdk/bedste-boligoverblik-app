import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoligOpretComponent } from './containers/bolig-opret/bolig-opret.component';
import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';

const routes: Routes = [
  {
    path: 'oversigt',
    component: BoligOversigtComponent,
  },
  {
    path: 'opret',
    component: BoligOpretComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoligRoutingModule {}
