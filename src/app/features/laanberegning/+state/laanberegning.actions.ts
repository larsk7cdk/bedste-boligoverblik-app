import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import {
  Laanberegning,
  LaanberegningOpret,
  Laanprodukt,
} from './laanberegning.interfaces';

const enum LaanberegningActionTypes {
  LAANPRODUKT_LOAD = '[Laanberegning - Load laanprodukter]',
  LAANPRODUKT_LOAD_SUCCESS = '[Laanberegning - Load laanprodukter Success]',
  LAANPRODUKT_LOAD_FAILED = '[Laanberegning - Load laanprodukter Failure]',

  LAAN_BEREGN = '[Laanberegning - Beregn laan]',
  LAAN_BEREGN_SUCCESS = '[Laanberegning - Beregn laan Success]',
  LAAN_BEREGN_FAILED = '[Laanberegning - Beregn laan Failure]',

  LAANBEREGNING_LOAD = '[Laanberegning - Load laanberegning]',
  LAANBEREGNING_LOAD_SUCCESS = '[Laanberegning - Load laanberegning Success]',
  LAANBEREGNING_LOAD_FAILED = '[Laanberegning - Load laanberegning Failure]',

  LAANBEREGNING_SAVE = '[Laanberegning - Save laanberegning]',
  LAANBEREGNING_SAVE_SUCCESS = '[Laanberegning - Save laanberegning Success]',
  LAANBEREGNING_SAVE_FAILED = '[Laanberegning - Save laanberegning Failure]',
}

export type LaanberegningDispatchableActions = TypedAction<LaanberegningActionTypes>;

export const loadLaanprodukt = createAction(
  LaanberegningActionTypes.LAANPRODUKT_LOAD
);

export const loadLaanproduktSuccess = createAction(
  LaanberegningActionTypes.LAANPRODUKT_LOAD_SUCCESS,
  props<{ laanprodukter: Laanprodukt[] }>()
);

export const loadLaanproduktFailed = createAction(
  LaanberegningActionTypes.LAANPRODUKT_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);

export const beregnLaan = createAction(
  LaanberegningActionTypes.LAAN_BEREGN,
  props<{ request: null }>()
);

export const beregnLaanSuccess = createAction(
  LaanberegningActionTypes.LAAN_BEREGN_SUCCESS,
  props<{ laanresultat: Laanprodukt[] }>()
);

export const beregnLaanFailed = createAction(
  LaanberegningActionTypes.LAAN_BEREGN_FAILED,
  props<{ error: HttpErrorResponse }>()
);

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

export const saveLaanberegning = createAction(
  LaanberegningActionTypes.LAANBEREGNING_SAVE,
  props<{ request: LaanberegningOpret }>()
);

export const saveLaanberegningSuccess = createAction(
  LaanberegningActionTypes.LAANBEREGNING_SAVE_SUCCESS
);

export const saveLaanberegningFailed = createAction(
  LaanberegningActionTypes.LAANBEREGNING_SAVE_FAILED,
  props<{ error: HttpErrorResponse }>()
);
