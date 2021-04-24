import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LaanberegningRoutingModule } from './laanberegning-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LaanberegningStateModule } from './+state/laanberegning.state.module';
import { LaanberegningService } from './services/laanberegning.service';
import { LaanberegningOversigtComponent } from './containers/laanberegning-oversigt/laanberegning-oversigt.component';
import { LaanberegningOpretComponent } from './containers/laanberegning-opret/laanberegning-opret.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LaanberegningOversigtComponent,
    LaanberegningOpretComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LaanberegningRoutingModule,
    LaanberegningStateModule,
    SharedModule
  ],
  exports: [],
  providers: [LaanberegningService],
})
export class LaanberegningModule {}
