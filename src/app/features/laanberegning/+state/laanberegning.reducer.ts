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
        error: null,
      },
    };
  }),

  on(fromActions.loadLaanberegningSuccess, (state, { laanberegning }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      laanberegning,
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
