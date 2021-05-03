import * as fromActions from './laan.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaanMapperService } from './laan.mapper.service';
import { LaanResponse } from '../services/laan.service.interfaces';
import { LaanService } from '../services/laan.service';
import { of } from 'rxjs';

@Injectable()
export class LaanEffects {
  constructor(
    private actions$: Actions,
    private laanService: LaanService,
    private laanMapperService: LaanMapperService
  ) {}

  loadLaan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaan),
      switchMap((action) => {
        return this.laanService.getLaan$(action.boligKey).pipe(
          map((response: LaanResponse) =>
            fromActions.loadLaanSuccess({
              laan: this.laanMapperService.mapToLaan(response),
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(fromActions.loadLaanFailed({ error }))
          )
        );
      })
    )
  );

  saveLaan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveLaan),
      exhaustMap((action) => {
        const request = this.laanMapperService.mapToLaanRegistrerRequest(
          action.request
        );

        return this.laanService.saveLaan$(request).pipe(
          map(() => fromActions.saveLaanSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.saveLaanFailed({
                error,
              })
            )
          )
        );
      })
    )
  );
}
