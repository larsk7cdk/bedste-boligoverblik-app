import * as fromActions from './laanberegning.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LaanberegningService } from '../services/laanberegning.service';
import { of } from 'rxjs';
import { LaanberegningResponse } from '../services/laanberegning.service.interfaces';
import { LaanberegningMapperService } from './laanberegning.mapper.service';

@Injectable()
export class LaanberegningEffects {
  constructor(
    private actions$: Actions,
    private laanberegningService: LaanberegningService,
    private laanberegningMapperService: LaanberegningMapperService
  ) {}

  loadLaanberegninger$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaanberegning),
      switchMap((action) => {
        const request = this.laanberegningMapperService.mapToLaanberegningRequest(
          action.request
        );
        return this.laanberegningService
          .getLaanberegningJyskeBank$(request)
          .pipe(
            map((response: LaanberegningResponse) =>
              fromActions.loadLaanberegningSuccess({
                laanberegning: this.laanberegningMapperService.mapToLaanberegning(
                  response
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
          );
      })
    )
  );
}
