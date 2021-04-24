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
    state.behaviours.loading === false && state.laanberegninger !== null
);

export const selectLaanberegningIsSaving = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) => state.behaviours.saving === true
);

export const selectLaanberegningIsSaved = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) => state.behaviours.saving
);

export const selectLaanberegningHasError = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState) => state.behaviours.error !== null
);

export const selectLaanberegninger = createSelector(
  selectLaanberegningState,
  (state: fromInterfaces.LaanberegningState): fromInterfaces.Laanberegning[] =>
    state.laanberegninger
);
