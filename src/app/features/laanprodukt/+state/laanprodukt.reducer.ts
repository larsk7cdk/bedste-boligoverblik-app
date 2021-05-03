import * as fromActions from './laanprodukt.actions';
import { createReducer, on } from '@ngrx/store';
import { LaanproduktState } from './laanprodukt.interfaces';

const initialState: LaanproduktState = {
  behaviours: {
    loading: false,
    error: null,
  },
  laanprodukter: [],
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
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
        error,
      },
      laanberegninger: [],
    };
  })
);
