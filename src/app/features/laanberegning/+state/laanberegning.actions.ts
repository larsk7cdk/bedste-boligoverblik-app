import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Laanberegning } from './laanberegning.interfaces';

const enum LaanberegningActionTypes {
  LAANBEREGNING_LOAD = '[Laanberegning - Load laanberegning]',
  LAANBEREGNING_LOAD_SUCCESS = '[Laanberegning - Load laanberegning Success]',
  LAANBEREGNING_LOAD_FAILED = '[Laanberegning - Load laanberegning Failure]',
}

export type LaanberegningDispatchableActions = TypedAction<LaanberegningActionTypes>;

export const loadLaanberegning = createAction(
  LaanberegningActionTypes.LAANBEREGNING_LOAD,
  props<{ userKey: string }>()
);

export const loadLaanberegningSuccess = createAction(
  LaanberegningActionTypes.LAANBEREGNING_LOAD_SUCCESS,
  props<{ laanberegninger: Laanberegning[] }>()
);

export const loadLaanberegningFailed = createAction(
  LaanberegningActionTypes.LAANBEREGNING_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);
