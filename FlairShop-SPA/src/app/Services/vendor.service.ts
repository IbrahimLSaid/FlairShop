import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../Models/vendor';

@Injectable()
export class VendorService {
    baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.baseUrl + 'vendors');
}



}
