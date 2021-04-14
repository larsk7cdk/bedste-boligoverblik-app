import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromBoligActions from './bolig.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { BoligService } from '../services/bolig.service';
import { BoligResponse } from '../services/bolig.service.interfaces';

@Injectable()
export class BoligEffects {
  constructor(private actions$: Actions, private boligService: BoligService) {}

  loadJyskeFrihedBeregning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBoligActions.loadBolig),
      switchMap((action) =>
        this.boligService.getBolig$(action.request).pipe(
          map((response: BoligResponse) =>
            fromBoligActions.loadBoligSuccess({
              boliger: [],
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
