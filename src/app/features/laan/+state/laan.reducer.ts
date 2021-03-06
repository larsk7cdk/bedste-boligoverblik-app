import * as fromActions from './laan.actions';
import { createReducer, on } from '@ngrx/store';
import { LaanState } from './laan.interfaces';

const initialState: LaanState = {
  behaviours: {
    loading: false,
    saving: false,
    saved: false,
    error: null,
  },
  boligKey: null,
  laan: [],
};

export const reducer = createReducer(
  initialState,

  on(fromActions.loadLaan, (state, { boligKey }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
      },
      boligKey,
    };
  }),

  on(fromActions.loadLaanSuccess, (state, { laan }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      laan,
    };
  }),

  on(fromActions.loadLaanFailed, (state, { error }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
        error,
      },
      laan: [],
    };
  }),

  on(fromActions.saveLaan, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: true,
        saved: false,
        error: null,
      },
    };
  }),

  on(fromActions.saveLaanSuccess, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
        saved: true,
      },
    };
  }),

  on(fromActions.saveLaanFailed, (state, { error }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
        error,
      },
    };
  })
);
