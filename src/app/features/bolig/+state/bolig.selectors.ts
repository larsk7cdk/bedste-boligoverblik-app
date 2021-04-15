import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOLIG_FEATURE_NAME } from '../bolig.constants';
import * as fromBoligInterfaces from './bolig.interfaces';

export const selectBoligState = createFeatureSelector<fromBoligInterfaces.BoligState>(
  BOLIG_FEATURE_NAME
);

export const selectBoligIsLoading = createSelector(
  selectBoligState,
  (state: fromBoligInterfaces.BoligState) => state.behaviours.loading === true
);

export const selectBoligIsLoaded = createSelector(
  selectBoligState,
  (state: fromBoligInterfaces.BoligState) =>
    state.behaviours.loading === false && state.boliger !== null
);

export const selectBoligHasError = createSelector(
  selectBoligState,
  (state: fromBoligInterfaces.BoligState) => state.behaviours.error !== null
);

export const selectBoliger = createSelector(
  selectBoligState,
  (state: fromBoligInterfaces.BoligState): fromBoligInterfaces.Bolig[] =>
    state.boliger
);
