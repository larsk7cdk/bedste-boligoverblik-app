import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAAN_FEATURE_NAME } from '../laan.constants';
import * as fromInterfaces from './laan.interfaces';

export const selectLaanState = createFeatureSelector<fromInterfaces.LaanState>(
  LAAN_FEATURE_NAME
);

export const selectLaanIsLoading = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState) => state.behaviours.loading === true
);

export const selectLaanIsLoaded = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState) =>
    state.behaviours.loading === false && state.laan !== null
);

export const selectLaanIsSaving = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState) => state.behaviours.saving === true
);

export const selectLaanIsSaved = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState) =>
    state.behaviours.error === null && state.behaviours.saved === true
);

export const selectLaanHasError = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState) => state.behaviours.error !== null
);

export const selectLaan = createSelector(
  selectLaanState,
  (state: fromInterfaces.LaanState): fromInterfaces.Laan[] => state.laan
);
