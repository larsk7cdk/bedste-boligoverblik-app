import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Laan, LaanRegistrer } from './laan.interfaces';

const enum LaanActionTypes {
  LAAN_LOAD = '[Laan - Load laan]',
  LAAN_LOAD_SUCCESS = '[Laan - Load laan Success]',
  LAAN_LOAD_FAILED = '[Laan - Load laan Failure]',

  LAAN_SAVE = '[Laan - Save laan]',
  LAAN_SAVE_SUCCESS = '[Laan - Save laan Success]',
  LAAN_SAVE_FAILED = '[Laan - Save laan Failure]',
}

export type LaanDispatchableActions = TypedAction<LaanActionTypes>;

export const loadLaan = createAction(
  LaanActionTypes.LAAN_LOAD,
  props<{ boligKey: string }>()
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
  props<{ request: LaanRegistrer }>()
);

export const saveLaanSuccess = createAction(LaanActionTypes.LAAN_SAVE_SUCCESS);

export const saveLaanFailed = createAction(
  LaanActionTypes.LAAN_SAVE_FAILED,
  props<{ error: HttpErrorResponse }>()
);
