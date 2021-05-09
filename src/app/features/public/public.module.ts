import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { OmComponent } from './containers/om/om.component';

@NgModule({
  declarations: [OmComponent],
  imports: [CommonModule, PublicRoutingModule],
})
export class PublicModule {}
