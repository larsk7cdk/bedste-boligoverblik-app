import * as fromActions from './laan.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LaanService } from '../services/laan.service';
import { LaanRegistrerRequest } from '../services/laan.service.interfaces';
@Injectable()
export class LaanEffects {
  constructor(private actions$: Actions, private laanService: LaanService) {}

  // loadLaan$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromActions.loadLaan),
  //     switchMap((action) =>
  //       this.laanService.getLaan$(action.request).pipe(
  //         map((response: LaanResponse) =>
  //           fromActions.loadLaanSuccess({
  //             laan: response.map(
  //               (m): Laan => {
  //                 return {
  //                   userKey: m.userKey,
  //                   partitionKey: m.partitionKey,
  //                   rowKey: m.rowKey,
  //                   timestamp: m.timestamp,
  //                 };
  //               }
  //             ),
  //           })
  //         ),
  //         catchError((error: HttpErrorResponse) =>
  //           of(
  //             fromActions.loadLaanFailed({
  //               error,
  //             })
  //           )
  //         )
  //       )
  //     )
  //   )
  // );

  saveLaanberegning$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveLaan),
      exhaustMap((action) => {
        return this.laanService
          .saveLaan$(action.request)
          .pipe(map(() => fromActions.saveLaanSuccess()));
      }),
      catchError((error: HttpErrorResponse) =>
        of(
          fromActions.saveLaanFailed({
            error,
          })
        )
      )
    )
  );
}
