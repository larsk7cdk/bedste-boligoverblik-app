import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaanOversigtComponent } from './containers/laan-oversigt/laan-oversigt.component';
import { LaanRegistrerComponent } from './containers/laan-registrer/laan-registrer.component';

const routes: Routes = [
  {
    path: '',
    component: LaanOversigtComponent,
  },
  {
    path: 'registrer',
    component: LaanRegistrerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaanberegningRoutingModule {}
