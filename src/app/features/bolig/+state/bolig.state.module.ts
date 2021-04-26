import * as fromReducer from './bolig.reducer';
import { BOLIG_FEATURE_NAME } from '../bolig.constants';
import { BoligEffects } from './bolig.effects';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BoligFacade } from './bolig.facade';
import { BoligMapperService } from './bolig.mapper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(BOLIG_FEATURE_NAME, fromReducer.reducer),
    EffectsModule.forFeature([BoligEffects]),
  ],
  providers: [BoligFacade, BoligMapperService],
})
export class BoligStateModule {}
