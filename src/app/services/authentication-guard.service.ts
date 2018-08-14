// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationGuardService {

//   constructor() { }
// }


import { CanActivate, Router } from '@angular/router';
//  from "angularfire2/angularfire2";
import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Rx";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthenticationGuardService implements CanActivate {

constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.checkAuth().signin) {
      this.router.navigate(['/user-login']);
      return false;
    }
    return true;
  }

}
