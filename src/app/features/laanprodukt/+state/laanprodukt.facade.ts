import * as fromSelectors from './laanprodukt.selectors';
import { distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LaanproduktDispatchableActions } from './laanprodukt.actions';
import { select, Store } from '@ngrx/store';

@Injectable()
export class LaanproduktFacade {
  constructor(private store: Store) {}

  public LaanproduktIsLoading$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanproduktIsLoading)
  );

  public LaanproduktIsLoaded$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanproduktIsLoaded)
  );

  public LaanproduktHasError$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanproduktHasError)
  );

  public Laanprodukter$ = this.store.pipe(
    distinctUntilChanged(),
    select(fromSelectors.selectLaanprodukter)
  );

  public Dispatch(action: LaanproduktDispatchableActions): void {
    this.store.dispatch(action);
  }
}
