import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromBoligActions from './bolig.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { BoligService } from '../services/bolig.service';
import { BoligResponse } from '../services/bolig.service.interfaces';
import { Bolig } from './bolig.interfaces';

@Injectable()
export class BoligEffects {
  constructor(private actions$: Actions, private boligService: BoligService) {}

  loadJyskeFrihedBeregning$ = createEffect(() =>
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
                    addresse: m.addresse,
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
}
