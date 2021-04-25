import * as fromActions from './laanberegning.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaanberegningService } from '../services/laanberegning.service';
import { of } from 'rxjs';
import { LaanberegningResponse } from '../services/laanberegning.service.interfaces';

@Injectable()
export class LaanberegningEffects {
  constructor(
    private actions$: Actions,
    private laanberegningService: LaanberegningService
  ) {}

  loadLaanberegninger$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaanberegning),
      switchMap((action) =>
        this.laanberegningService
          .getLaanberegningJyskeBank$(action.request)
          .pipe(
            map((response: LaanberegningResponse) =>
              fromActions.loadLaanberegningSuccess({
                laanberegning: response,
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
}
