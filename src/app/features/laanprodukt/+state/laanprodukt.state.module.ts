import * as fromReducer from './laanprodukt.reducer';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { LAANPRODUKT_FEATURE_NAME } from '../laanprodukt.constants';
import { LaanproduktEffects } from './laanprodukt.effects';
import { LaanproduktFacade } from './laanprodukt.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(LAANPRODUKT_FEATURE_NAME, fromReducer.reducer),
    EffectsModule.forFeature([LaanproduktEffects]),
  ],
  providers: [LaanproduktFacade],
})
export class LaanproduktStateModule {}
