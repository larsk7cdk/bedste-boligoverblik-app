import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromActions from './bolig.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { BoligService } from '../services/bolig.service';
import { BoligResponse } from '../services/bolig.service.interfaces';
import { BoligMapperService } from './bolig.mapper.service';

@Injectable()
export class BoligEffects {
  constructor(
    private actions$: Actions,
    private boligService: BoligService,
    private boligMapperService: BoligMapperService
  ) {}

  loadBolig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadBolig),
      switchMap((action) =>
        this.boligService.getBolig$(action.userKey).pipe(
          map((response: BoligResponse) =>
            fromActions.loadBoligSuccess({
              boliger: this.boligMapperService.mapToBolig(response),
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.loadBoligFailed({
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
      ofType(fromActions.saveBolig),
      exhaustMap((action) => {
        const request = this.boligMapperService.mapToBoligOpretRequest(
          action.request
        );

        return this.boligService
          .saveBolig$(request)
          .pipe(map(() => fromActions.saveBoligSuccess()));
      }),
      catchError((error: HttpErrorResponse) =>
        of(
          fromActions.saveBoligFailed({
            error,
          })
        )
      )
    )
  );
}
