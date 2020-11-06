import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';
import { Vendor } from '../Models/vendor';
import { AuthService } from './auth.service';

@Injectable()
export class VendorService {
    baseUrl = environment.apiUrl;
    role: string = this.authService.userToken.role;

constructor(private http: HttpClient, private authService: AuthService) { }

getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.baseUrl + 'vendors');
}

getVendor(id: number): Observable<Vendor> {
    return this.http.get<Vendor>(this.baseUrl + 'vendors/' + id);
}

getMyVendorProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'vendors/vendorproducts/' + this.authService.userToken.nameid);
}

activateVendor(vendor: Vendor) {
    return this.http.post(this.baseUrl + 'users/activatevendor', vendor);
}



isVendor() {
    this.authService.isVendor();
  }

}
