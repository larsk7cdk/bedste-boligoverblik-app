import * as fromActions from './bolig.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BoligMapperService } from './bolig.mapper.service';
import { BoligResponse } from '../services/bolig.service.interfaces';
import { BoligService } from '../services/bolig.service';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
        const request = this.boligMapperService.mapToBoligRegistrerRequest(
          action.request
        );

        return this.boligService.saveBolig$(request).pipe(
          map(() => fromActions.saveBoligSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.saveBoligFailed({
                error,
              })
            )
          )
        );
      })
    )
  );
}
