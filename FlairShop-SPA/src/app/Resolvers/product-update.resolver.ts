import {Injectable} from '@angular/core';
import { Product } from '../Models/product';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ProductService } from '../Services/product.service';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ProductUpdateResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private alertify: AlertifyService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.getProduct(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/products']);
                return of(null);
            })
        );
    }
}
