import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TypedAction } from '@ngrx/store/src/models';
import { Laanprodukt } from './laanprodukt.interfaces';

const enum LaanproduktActionTypes {
  LAANPRODUKT_LOAD = '[laanprodukt - Load laanprodukter]',
  LAANPRODUKT_LOAD_SUCCESS = '[laanprodukt - Load laanprodukter Success]',
  LAANPRODUKT_LOAD_FAILED = '[laanprodukt - Load laanprodukter Failure]',
}

export type LaanproduktDispatchableActions = TypedAction<LaanproduktActionTypes>;

export const loadLaanprodukt = createAction(
  LaanproduktActionTypes.LAANPRODUKT_LOAD
);

export const loadLaanproduktSuccess = createAction(
  LaanproduktActionTypes.LAANPRODUKT_LOAD_SUCCESS,
  props<{ laanprodukter: Laanprodukt[] }>()
);

export const loadLaanproduktFailed = createAction(
  LaanproduktActionTypes.LAANPRODUKT_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);

export const saveLaanberegningFailed = createAction(
  LaanproduktActionTypes.LAANPRODUKT_LOAD_FAILED,
  props<{ error: HttpErrorResponse }>()
);
