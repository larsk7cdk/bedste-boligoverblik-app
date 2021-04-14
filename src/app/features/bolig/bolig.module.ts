import { BoligOversigtComponent } from './containers/bolig-oversigt/bolig-oversigt.component';
import { BoligRoutingModule } from './bolig-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BoligStateModule } from './+state/bolig.state.module';

@NgModule({
  declarations: [BoligOversigtComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BoligRoutingModule,
    BoligStateModule,
  ],
  exports: [BoligOversigtComponent],
})
export class BoligModule {}
