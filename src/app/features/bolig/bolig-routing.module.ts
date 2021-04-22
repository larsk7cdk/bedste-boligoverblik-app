import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoligOpretComponent } from './containers/bolig-opret/bolig-opret.component';
import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';
import { BoligVisComponent } from './containers/bolig-vis/bolig-vis.component';

const routes: Routes = [
  {
    path: 'oversigt',
    component: BoligOversigtComponent,
  },
  {
    path: 'opret',
    component: BoligOpretComponent,
  },
  {
    path: 'vis',
    component: BoligVisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoligRoutingModule {}
