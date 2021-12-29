import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsguardGuard implements CanActivate {
  constructor(
    private dataservice: DataService,
    private route: Router
  ) {
     
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.dataservice.active_wizard==null)  {
        this.route.navigateByUrl('/wizard-list');
      }
      
    return true;
  }
  
   

   }

