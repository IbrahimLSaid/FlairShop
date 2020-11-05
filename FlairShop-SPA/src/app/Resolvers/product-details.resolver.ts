import {Injectable} from '@angular/core';
import { Product } from '../Models/product';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { ProductService } from '../Services/product.service';
import { AlertifyService } from '../Services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductDetailsResolver implements Resolve<Product> {
    constructor(private productService: ProductService, private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Product> {
        return this.productService.getProduct(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/products']);
                return of(null);
            })
        );
    }
}
