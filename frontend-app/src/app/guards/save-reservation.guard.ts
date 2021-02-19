import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  SearchService
} from '../services/search.service';

@Injectable({
  providedIn: 'root'
})
export class SaveReservationGuard implements CanActivate {

  constructor(private searchService: SearchService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean | UrlTree > | Promise < boolean | UrlTree > | boolean | UrlTree {

    if (this.searchService.searchDate.getValue() !== '') {
      return true;
    }
    this.router.navigate(['/search']);
    return false;
  }

}
