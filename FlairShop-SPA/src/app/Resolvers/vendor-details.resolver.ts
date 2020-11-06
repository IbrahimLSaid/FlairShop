import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { VendorService } from '../Services/vendor.service';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vendor } from '../Models/vendor';

@Injectable()
export class VendorDetailsResolver implements Resolve<Vendor> {
    constructor(private vendorService: VendorService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Vendor> {
        return this.vendorService.getVendor(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/vendors']);
                return of(null);
            })
        );
    }
}
