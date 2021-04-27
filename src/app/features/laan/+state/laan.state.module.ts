import * as fromReducer from './laan.reducer';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LAAN_FEATURE_NAME } from '../laan.constants';
import { LaanEffects } from './laan.effects';
import { LaanFacade } from './laan.facade';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { LaanMapperService } from './laan.mapper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(LAAN_FEATURE_NAME, fromReducer.reducer),
    EffectsModule.forFeature([LaanEffects]),
  ],
  providers: [LaanFacade, LaanMapperService],
})
export class LaanStateModule {}
