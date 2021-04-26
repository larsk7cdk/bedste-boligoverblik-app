import * as fromSelectors from './bolig.selectors';
import { BoligDispatchableActions } from './bolig.actions';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable()
export class BoligFacade {
  constructor(private store: Store) {}

  public BoligIsLoading$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligIsLoading)
  );

  public BoligIsLoaded$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligIsLoaded)
  );

  public BoligIsSaving$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligIsSaving)
  );

  public BoligIsSaved$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligIsSaved)
  );

  public BoligHasError$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligHasError)
  );

  public BoligSelected$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoligSelected)
  );

  public Boliger$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectBoliger)
  );

  public Dispatch(action: BoligDispatchableActions): void {
    this.store.dispatch(action);
  }
}
