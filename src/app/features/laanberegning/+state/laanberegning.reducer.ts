import * as fromActions from './laanberegning.actions';
import { createReducer, on } from '@ngrx/store';
import { LaanberegningState } from './laanberegning.interfaces';

const initialState: LaanberegningState = {
  behaviours: {
    loading: false,
    error: null,
  },
  laanberegning: null,
};

export const reducer = createReducer(
  initialState,

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
  })
);
