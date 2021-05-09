import * as fromSelectors from './laan.selectors';
import { LaanDispatchableActions } from './laan.actions';
import { distinctUntilChanged, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Injectable()
export class LaanFacade {
  constructor(private store: Store) {}

  public LaanIsLoading$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanIsLoading)
  );

  public LaanIsLoaded$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanIsLoaded)
  );

  public LaanIsSaving$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanIsSaving)
  );

  public LaanIsSaved$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanIsSaved)
  );

  public LaanHasError$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanHasError)
  );

  public Laan$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaan)
  );

  public get boligKey(): string {
    let key: string = null;
    this.store
      .pipe(distinctUntilChanged(), select(fromSelectors.selectBoligKey))
      .pipe(first())
      .subscribe((s) => (key = s));

    return key;
  }

  public Dispatch(action: LaanDispatchableActions): void {
    this.store.dispatch(action);
  }
}
