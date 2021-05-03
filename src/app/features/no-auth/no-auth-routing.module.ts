import { NgModule } from '@angular/core';
import { OmComponent } from './containers/om/om.component';
import { RouterModule, Routes } from '@angular/router';
import { ForsideComponent } from './containers/forside/forside.component';

const routes: Routes = [
  {
    path: '',
    component: ForsideComponent,
  },
  {
    path: 'om',
    component: OmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAuthRoutingModule {}
