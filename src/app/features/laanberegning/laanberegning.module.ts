import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaanberegningRoutingModule } from './laanberegning-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LaanberegningStateModule } from './+state/laanberegning.state.module';
import { LaanberegningService } from './services/laanberegning.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LaanberegningRoutingModule,
    LaanberegningStateModule,
  ],
  exports: [],
  providers: [LaanberegningService],
})
export class LaanberegningModule {}
