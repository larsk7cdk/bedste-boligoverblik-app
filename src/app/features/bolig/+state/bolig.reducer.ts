import * as fromBoligActions from './bolig.actions';
import { BoligState } from './bolig.interfaces';
import { createReducer, on } from '@ngrx/store';

const initialState: BoligState = {
  behaviours: {
    loading: false,
    error: null,
  },
  boliger: [],
};

export const reducer = createReducer(
  initialState,

  on(fromBoligActions.loadBolig, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
      },
    };
  }),

  on(fromBoligActions.loadBoligSuccess, (state, { boliger }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      boliger,
    };
  }),

  on(fromBoligActions.loadBoligFailed, (state, { error }) => {
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
