import { Observable } from 'rxjs';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

type BooleanReturnTypes = Observable<boolean> | Promise<boolean> | boolean;

export interface CanComponentDeactivate {
  canDeactivate: () => BooleanReturnTypes;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): BooleanReturnTypes {
    return component.canDeactivate();
  }
}
