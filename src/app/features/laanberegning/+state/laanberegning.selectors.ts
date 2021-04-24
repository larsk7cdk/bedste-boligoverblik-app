import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAANBEREGNING_FEATURE_NAME } from '../laanberegning.constants';
import * as fromInterfaces from './laanberegning.interfaces';

export const selectLaanberegningState = createFeatureSelector<fromInterfaces.LaanberegningState>(
  LAANBEREGNING_FEATURE_NAME
);

export const selectLaanberegningIsLoading = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) =>
    state.behaviours.loading === true
);

export const selectLaanberegningIsLoaded = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) =>
    state.behaviours.loading === false && state.laanberegning !== null
);

export const selectLaanberegningHasError = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) => state.behaviours.error !== null
);

export const selectLaanberegning = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState): fromInterfaces.Laanberegning =>
    state.laanberegning
);
