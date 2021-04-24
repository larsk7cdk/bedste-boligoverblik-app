import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoAuthRoutingModule } from './no-auth-routing.module';
import { OmComponent } from './containers/om/om.component';

@NgModule({
  declarations: [OmComponent],
  imports: [CommonModule, NoAuthRoutingModule],
})
export class NoAuthModule {}
