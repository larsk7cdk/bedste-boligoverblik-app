import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OmComponent } from './containers/om/om.component';
import { InfoRoutingModule } from './info-routing.module';

@NgModule({
  declarations: [OmComponent],
  imports: [CommonModule, InfoRoutingModule],
})
export class InfoModule {}
