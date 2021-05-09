import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';
import { BoligRegistrerComponent } from './containers/bolig-registrer/bolig-registrer.component';
import { BoligVisComponent } from './containers/bolig-vis/bolig-vis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoligGuard } from '../shared/guards/bolig.guard';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  {
    path: '',
    component: BoligOversigtComponent,
  },
  {
    path: 'registrer',
    component: BoligRegistrerComponent,
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
