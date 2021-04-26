import { Bolig, BoligRegistrer } from './bolig.interfaces';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';

const enum BoligActionTypes {
  BOLIG_SET_SELECTED = '[Bolig - Set selected bolig]',

  BOLIG_LOAD = '[Bolig - Load bolig]',
  BOLIG_LOAD_SUCCESS = '[Bolig - Load bolig Success]',
  BOLIG_LOAD_FAILED = '[Bolig - Load bolig Failure]',

  BOLIG_SAVE = '[Bolig - Save bolig]',
  BOLIG_SAVE_SUCCESS = '[Bolig - Save bolig Success]',
  BOLIG_SAVE_FAILED = '[Bolig - Save bolig Failure]',
}

export type BoligDispatchableActions = TypedAction<BoligActionTypes>;

export const setSelectedBolig = createAction(
  BoligActionTypes.BOLIG_SET_SELECTED,
  props<{ bolig: Bolig }>()
);

export const loadBolig = createAction(
  BoligActionTypes.BOLIG_LOAD,
  props<{ userKey: string }>()
);

export const loadBoligSuccess = createAction(
  BoligActionTypes.BOLIG_LOAD_SUCCESS,
  props<{ boliger: Bolig[] }>()
);

export const loadBoligFailed = createAction(
  BoligActionTypes.BOLIG_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);

export const saveBolig = createAction(
  BoligActionTypes.BOLIG_SAVE,
  props<{ request: BoligRegistrer }>()
);

export const saveBoligSuccess = createAction(
  BoligActionTypes.BOLIG_SAVE_SUCCESS
);

export const saveBoligFailed = createAction(
  BoligActionTypes.BOLIG_SAVE_FAILED,
  props<{ error: HttpErrorResponse }>()
);
