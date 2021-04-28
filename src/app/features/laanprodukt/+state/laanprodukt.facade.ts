import * as fromSelectors from './laanprodukt.selectors';
import { distinctUntilChanged, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LaanproduktDispatchableActions } from './laanprodukt.actions';
import { select, Store } from '@ngrx/store';
import { Laanprodukt } from './laanprodukt.interfaces';

@Injectable()
export class LaanproduktFacade {
  laanprodukter: Laanprodukt[] = [];

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

  public Laanprodukt(laanproduktKey: string): Laanprodukt {
    if (this.laanprodukter.length === 0) {
      this.Laanprodukter$.pipe(first()).subscribe(
        (s) => (this.laanprodukter = s)
      );
    }
    return this.laanprodukter.find((f) => f.key === laanproduktKey);
  }

  public Dispatch(action: LaanproduktDispatchableActions): void {
    this.store.dispatch(action);
  }
}
