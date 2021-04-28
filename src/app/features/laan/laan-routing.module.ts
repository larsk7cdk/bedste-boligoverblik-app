import { LaanOversigtComponent } from './containers/laan-oversigt/laan-oversigt.component';
import { LaanRegistrerComponent } from './containers/laan-registrer/laan-registrer.component';
import { LaanVisComponent } from './presentational/laan-vis/laan-vis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LaanOversigtComponent,
  },
  {
    path: 'registrer',
    component: LaanRegistrerComponent,
  },
  {
    path: 'vis',
    component: LaanVisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaanberegningRoutingModule {}
