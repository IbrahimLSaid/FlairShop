import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';


const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json',
    accept: 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl;



constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl + 'products');
}

getProduct(id: number): Observable<Product> {
  return this.http.get<Product>(this.baseUrl + 'products/' + id);
}

updateProduct(id: number, product: Product) {
  return this.http.put(this.baseUrl + 'products/' + id, product);
}

createProduct(product: Product) {
  return this.http.post(this.baseUrl + 'products/create', product, httpOptions);
}

deleteProduct(id: number) {
  return this.http.delete(this.baseUrl + 'products/delete' + id);
}

}
