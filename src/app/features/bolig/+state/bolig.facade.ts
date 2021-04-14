import * as fromBoligSelectors from './bolig.selectors';
import { BoligDispatchableActions } from './bolig.actions';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable()
export class BoligFacade {
  constructor(private store: Store) {}

  public BoligIsLoading$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromBoligSelectors.selectBoligIsLoading)
  );

  public BoligIsLoaded$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromBoligSelectors.selectBoligIsLoaded)
  );

  public BoligHasError$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromBoligSelectors.selectBoligHasError)
  );

  public Boliger$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromBoligSelectors.selectBoliger)
  );

  public Dispatch(action: BoligDispatchableActions): void {
    this.store.dispatch(action);
  }
}
