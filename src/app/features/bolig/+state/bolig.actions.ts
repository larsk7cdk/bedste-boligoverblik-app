import { Bolig, BoligRequest, BoligResponse } from './bolig.interfaces';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';

const enum BoligActionTypes {
  BOLIG_LOAD = '[Bolig - Load boliger]',
  BOLIG_LOAD_SUCCESS = '[Bolig - Load boliger Success]',
  BOLIG_LOAD_FAILED = '[Bolig - Load boliger Failure]',
}

export type BoligDispatchableActions = TypedAction<BoligActionTypes>;

export const loadBolig = createAction(
  BoligActionTypes.BOLIG_LOAD,
  props<{ request: BoligRequest }>()
);

export const loadBoligSuccess = createAction(
  BoligActionTypes.BOLIG_LOAD_SUCCESS,
  props<{ boliger: Bolig[] }>()
);

export const loadBoligFailed = createAction(
  BoligActionTypes.BOLIG_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);
