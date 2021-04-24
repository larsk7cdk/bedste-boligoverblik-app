import * as fromActions from './laanprodukt.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Laanprodukt } from './laanprodukt.interfaces';
import { LaanproduktResponse } from '../services/laanprodukt.service.interface';
import { LaanproduktService } from '../services/laanprodukt.service';
import { of } from 'rxjs';

@Injectable()
export class LaanproduktEffects {
  constructor(
    private actions$: Actions,
    private laanproduktService: LaanproduktService
  ) {}

  loadLaanprodukter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadLaanprodukt),
      switchMap((action) =>
        this.laanproduktService.getLaanprodukter$().pipe(
          map((response: LaanproduktResponse) =>
            fromActions.loadLaanproduktSuccess({
              laanprodukter: response.laanProdukter.map(
                (m): Laanprodukt => {
                  return {
                    key: m.key,
                    value: m.value,
                  };
                }
              ),
            })
          ),
          catchError((error: HttpErrorResponse) =>
            of(
              fromActions.loadLaanproduktFailed({
                error,
              })
            )
          )
        )
      )
    )
  );
}
