import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaanberegningOpretComponent } from './containers/laanberegning-opret/laanberegning-opret.component';
import { LaanberegningOversigtComponent } from './containers/laanberegning-oversigt/laanberegning-oversigt.component';

const routes: Routes = [
  {
    path: '',
    component: LaanberegningOversigtComponent,
  },
  {
    path: 'opret',
    component: LaanberegningOpretComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaanberegningRoutingModule {}
