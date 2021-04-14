import { NgModule } from '@angular/core';
import { OmComponent } from './containers/om/om.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'om',
    component: OmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
