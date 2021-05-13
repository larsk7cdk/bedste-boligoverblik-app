import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { BoligFacade } from 'src/app/features/bolig/+state/bolig.facade';

@Injectable({
  providedIn: 'root',
})
export class BoligGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private boligFacade: BoligFacade) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let result = false;
    this.boligFacade.Boliger$.pipe(first()).subscribe((s) => {
      result = s.length === 0;
      // this.router.navigate(['/']);
    });

    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
