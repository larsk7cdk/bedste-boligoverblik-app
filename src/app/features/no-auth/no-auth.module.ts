import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OmComponent } from './containers/om/om.component';
import { NoAuthRoutingModule } from './no-auth-routing.module';

@NgModule({
  declarations: [OmComponent],
  imports: [CommonModule, NoAuthRoutingModule],
})
export class NoAuthModule {}
