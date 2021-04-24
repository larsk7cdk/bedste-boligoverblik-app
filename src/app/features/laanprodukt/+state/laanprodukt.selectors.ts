import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAANPRODUKT_FEATURE_NAME } from '../laanprodukt.constants';
import * as fromInterfaces from './laanprodukt.interfaces';

export const selectLaanproduktState = createFeatureSelector<fromInterfaces.LaanproduktState>(
  LAANPRODUKT_FEATURE_NAME
);

export const selectLaanproduktIsLoading = createSelector(
  selectLaanproduktState,
  (state: fromInterfaces.LaanproduktState) => state.behaviours.loading === true
);

export const selectLaanproduktIsLoaded = createSelector(
  selectLaanproduktState,
  (state: fromInterfaces.LaanproduktState) =>
    state.behaviours.loading === false && state.laanprodukter !== null
);

export const selectLaanproduktHasError = createSelector(
  selectLaanproduktState,
  (state: fromInterfaces.LaanproduktState) => state.behaviours.error !== null
);

export const selectLaanprodukter = createSelector(
  selectLaanproduktState,
  (state: fromInterfaces.LaanproduktState): fromInterfaces.Laanprodukt[] =>
    state.laanprodukter
);
