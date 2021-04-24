import * as fromActions from './laan.actions';
import { createReducer, on } from '@ngrx/store';
import { LaanState } from './laan.interfaces';

const initialState: LaanState = {
  behaviours: {
    loading: false,
    saving: false,
    error: null,
  },
  laan: [],
};

export const reducer = createReducer(
  initialState,

  on(fromActions.loadLaan, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
      },
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
      },
    };
  }),

  on(fromActions.saveLaanSuccess, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
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
