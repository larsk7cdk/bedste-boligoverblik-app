import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { OmComponent } from './containers/om/om.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OmComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
})
export class PublicModule {}
