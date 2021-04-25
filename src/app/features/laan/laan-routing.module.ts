import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaanOpretComponent } from './containers/laan-opret/laan-opret.component';
import { LaanOversigtComponent } from './containers/laan-oversigt/laan-oversigt.component';

const routes: Routes = [
  {
    path: '',
    component: LaanOversigtComponent,
  },
  {
    path: 'opret',
    component: LaanOpretComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaanberegningRoutingModule {}
