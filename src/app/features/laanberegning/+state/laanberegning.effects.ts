import * as fromActions from './laanberegning.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Laanberegning, Laanprodukt } from './laanberegning.interfaces';
import { LaanberegningService } from '../services/laanberegning.service';
import { LaanproduktResponse } from '../services/laanprodukt.service.interface';
import { LaanproduktService } from '../services/laanprodukt.service';
import { of } from 'rxjs';
import {
  LaanberegningOpretRequest,
  LaanberegningResponse,
} from '../services/laanberegning.service.interfaces';

@Injectable()
export class LaanberegningEffects {
  constructor(
    private actions$: Actions,
    private laanproduktService: LaanproduktService,
    private laanberegningService: LaanberegningService
  ) {}

  loadLaanprodukter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaanprodukt),
      switchMap((action) =>
        this.laanproduktService.getLaanprodukter$().pipe(
          map((response: LaanproduktResponse) =>
            fromActions.loadLaanproduktSuccess({
              laanprodukter: response.laanProdukter.map(
                (m): Laanprodukt => {
                  return {
                    key: m.key,
                    value: m.value,
                  };
                }
              ),
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.loadLaanproduktFailed({
                error,
              })
            )
          )
        )
      )
    )
  );

  loadLaanberegninger$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaanberegning),
      switchMap((action) =>
        this.laanberegningService.getLaanberegning$(action.userKey).pipe(
          map((response: LaanberegningResponse) =>
            fromActions.loadLaanberegningSuccess({
              laanberegninger: response.map(
                (m): Laanberegning => {
                  return {
                    userKey: m.userKey,
                    partitionKey: m.partitionKey,
                    rowKey: m.rowKey,
                    timestamp: m.timestamp,
                  };
                }
              ),
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.loadLaanberegningFailed({
                error,
              })
            )
          )
        )
      )
    )
  );

  saveLaanberegning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveLaanberegning),
      exhaustMap((action) => {
        const request: LaanberegningOpretRequest = {
          userKey: action.request.userKey,
        };

        return this.laanberegningService
          .saveLaanberegning$(request)
          .pipe(map(() => fromActions.saveLaanberegningSuccess()));
      }),
      catchError((error: HttpErrorResponse) =>
        of(
          fromActions.saveLaanberegningFailed({
            error,
          })
        )
      )
    )
  );
}
