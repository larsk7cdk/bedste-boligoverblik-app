import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Laan, LaanOpret } from './laan.interfaces';

const enum LaanActionTypes {
  LAAN_LOAD = '[Laanberegning - Load laan]',
  LAAN_LOAD_SUCCESS = '[Laanberegning - Load laan Success]',
  LAAN_LOAD_FAILED = '[Laanberegning - Load laan Failure]',

  LAAN_SAVE = '[Laanberegning - Save laan]',
  LAAN_SAVE_SUCCESS = '[Laanberegning - Save laan Success]',
  LAAN_SAVE_FAILED = '[Laanberegning - Save laan Failure]',
}

export type LaanDispatchableActions = TypedAction<LaanActionTypes>;

export const loadLaan = createAction(
  LaanActionTypes.LAAN_LOAD,
  props<{ request: object }>()
);

export const loadLaanSuccess = createAction(
  LaanActionTypes.LAAN_LOAD_SUCCESS,
  props<{ laan: Laan[] }>()
);

export const loadLaanFailed = createAction(
  LaanActionTypes.LAAN_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);

export const saveLaan = createAction(
  LaanActionTypes.LAAN_SAVE,
  props<{ request: LaanOpret }>()
);

export const saveLaanSuccess = createAction(
  LaanActionTypes.LAAN_SAVE_SUCCESS
);

export const saveLaanFailed = createAction(
  LaanActionTypes.LAAN_SAVE_FAILED,
  props<{ error: HttpErrorResponse }>()
);
