import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LaanberegningStateModule } from './+state/laanberegning.state.module';
import { LaanberegningVisComponent } from './presentational/laan-vis/laanberegning-vis.component';
import { LaanberegningService } from './services/laanberegning.service';

@NgModule({
  declarations: [LaanberegningVisComponent],
  imports: [CommonModule, HttpClientModule, LaanberegningStateModule, SharedModule],
  exports: [LaanberegningVisComponent],
  providers: [LaanberegningService],
})
export class LaanberegningModule {}
