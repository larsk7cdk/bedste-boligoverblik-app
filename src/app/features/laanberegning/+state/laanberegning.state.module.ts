import * as fromReducer from './laanberegning.reducer';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LAANBEREGNING_FEATURE_NAME } from '../laanberegning.constants';
import { LaanberegningEffects } from './laanberegning.effects';
import { LaanberegningFacade } from './laanberegning.facade';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { LaanberegningMapperService } from './laanberegning.mapper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(LAANBEREGNING_FEATURE_NAME, fromReducer.reducer),
    EffectsModule.forFeature([LaanberegningEffects]),
  ],
  providers: [LaanberegningFacade, LaanberegningMapperService],
})
export class LaanberegningStateModule {}
