import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaust,
  exhaustMap,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromBoligActions from './bolig.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { BoligService } from '../services/bolig.service';
import {
  BoligOpretRequest,
  BoligResponse,
} from '../services/bolig.service.interfaces';
import { Bolig } from './bolig.interfaces';

@Injectable()
export class BoligEffects {
  constructor(private actions$: Actions, private boligService: BoligService) {}

  loadBolig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBoligActions.loadBolig),
      switchMap((action) =>
        this.boligService.getBolig$(action.userKey).pipe(
          map((response: BoligResponse) =>
            fromBoligActions.loadBoligSuccess({
              boliger: response.map(
                (m): Bolig => {
                  return {
                    userKey: m.userKey,
                    adresse: m.adresse,
                    x: m.x,
                    y: m.y,
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
              fromBoligActions.loadBoligFailed({
                error,
              })
            )
          )
        )
      )
    )
  );

  saveBolig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBoligActions.saveBolig),
      exhaustMap((action) => {
        const request: BoligOpretRequest = {
          userKey: action.request.userKey,
          adresse: action.request.adresse,
          x: 0,
          y: 1,
          partitionKey: 'bolig',
        };

        return this.boligService
          .saveBolig$(request)
          .pipe(map(() => fromBoligActions.saveBoligSuccess()));
      }),
      catchError((error: HttpErrorResponse) =>
        of(
          fromBoligActions.saveBoligFailed({
            error,
          })
        )
      )
    )
  );
}
