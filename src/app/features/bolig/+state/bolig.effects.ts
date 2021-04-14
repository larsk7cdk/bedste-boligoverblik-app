import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BoligActions from './bolig.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { BoligResponse } from './bolig.interfaces';

@Injectable()
export class BoligEffects {
  constructor(private actions$: Actions) {}

  // loadJyskeFrihedBeregning$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(BoligActions.loadBolig),
  //     switchMap((action) =>
  //       this.BoligService.getBoliger$(action.request).pipe(
  //         map((response: BoligResponse) =>
  //           BoligActions.loadBoligSuccess({
  //             boliger: response,
  //           })
  //         ),
  //         catchError((error: HttpErrorResponse) =>
  //           of(
  //             BoligActions.loadBoligFailed({
  //               error,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );
}
