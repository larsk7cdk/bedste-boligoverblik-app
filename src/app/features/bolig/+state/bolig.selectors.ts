import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOLIG_FEATURE_NAME } from '../bolig.constants';
import * as fromInterfaces from './bolig.interfaces';

export const selectBoligState = createFeatureSelector<fromInterfaces.BoligState>(
  BOLIG_FEATURE_NAME
);

export const selectBoligIsLoading = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState) => state.behaviours.loading === true
);

export const selectBoligIsLoaded = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState) =>
    state.behaviours.loading === false && state.boliger !== null
);

export const selectBoligIsSaving = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState) => state.behaviours.saving === true
);

export const selectBoligIsSaved = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState) => state.behaviours.saving
);

export const selectBoligHasError = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState) => state.behaviours.error !== null
);

export const selectBoliger = createSelector(
  selectBoligState,
  (state: fromInterfaces.BoligState): fromInterfaces.Bolig[] => state.boliger
);
