import * as fromActions from './bolig.actions';
import { BoligState } from './bolig.interfaces';
import { createReducer, on } from '@ngrx/store';

const initialState: BoligState = {
  behaviours: {
    loading: false,
    saving: false,
    saved: false,
    error: null,
  },
  boligSelected: null,
  boliger: [],
};

export const reducer = createReducer(
  initialState,

  on(fromActions.setSelectedBolig, (state, { bolig }) => {
    return {
      ...state,
      boligSelected: bolig,
    };
  }),

  on(fromActions.loadBolig, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: true,
        error: null,
      },
    };
  }),

  on(fromActions.loadBoligSuccess, (state, { boliger }) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        loading: false,
      },
      boliger,
    };
  }),

  on(fromActions.loadBoligFailed, (state, { error }) => {
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

  on(fromActions.saveBoligInit, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
        saved: false,
        error: null,
      },
    };
  }),

  on(fromActions.saveBolig, (state) => {
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

  on(fromActions.saveBoligSuccess, (state) => {
    return {
      ...state,
      behaviours: {
        ...state.behaviours,
        saving: false,
        saved: true,
      },
    };
  }),

  on(fromActions.saveBoligFailed, (state, { error }) => {
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
