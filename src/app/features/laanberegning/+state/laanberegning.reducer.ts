import * as fromActions from './laanberegning.actions';
import { createReducer, on } from '@ngrx/store';
import { LaanberegningState } from './laanberegning.interfaces';

const initialState: LaanberegningState = {
  behaviours: {
    loading: false,
    saving: false,
    error: null,
  },
  laanprodukter: [],
  laanberegninger: [],
};

export const reducer = createReducer(
  initialState,

  on(fromActions.loadLaanprodukt, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
      },
    };
  }),

  on(fromActions.loadLaanproduktSuccess, (state, { laanprodukter }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      laanprodukter,
    };
  }),

  on(fromActions.loadLaanproduktFailed, (state, { error }) => {
    debugger
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
        error,
      },
      laanberegninger: [],
    };
  }),

  on(fromActions.loadLaanberegning, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
      },
    };
  }),

  on(fromActions.loadLaanberegningSuccess, (state, { laanberegninger }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      laanberegninger,
    };
  }),

  on(fromActions.loadLaanberegningFailed, (state, { error }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
        error,
      },
      boliger: [],
    };
  }),

  on(fromActions.saveLaanberegning, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: true,
      },
    };
  }),

  on(fromActions.saveLaanberegningSuccess, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
      },
    };
  }),

  on(fromActions.saveLaanberegningFailed, (state, { error }) => {
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
