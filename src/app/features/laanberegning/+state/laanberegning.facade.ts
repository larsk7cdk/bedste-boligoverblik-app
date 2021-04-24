import * as fromSelectors from './laanberegning.selectors';
import { LaanberegningDispatchableActions } from './laanberegning.actions';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable()
export class LaanberegningFacade {
  constructor(private store: Store) {}

  public LaanberegningIsLoading$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanberegningIsLoading)
  );

  public LaanberegningIsLoaded$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanberegningIsLoaded)
  );

  public LaanberegningHasError$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanberegningHasError)
  );

  public Laanberegning$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanberegning)
  );

  public Dispatch(action: LaanberegningDispatchableActions): void {
    this.store.dispatch(action);
  }
}
