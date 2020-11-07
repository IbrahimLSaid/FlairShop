import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../Models/order';
import { Product } from '../Models/product';
import { AuthService } from './auth.service';

@Injectable()
export class OrderService {
    baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private authService: AuthService) { }

getOrders() {
    return this.http.get(this.baseUrl + 'orders/all/' + this.authService.userToken.nameid);
}

getOrder(orderId: number) {
    return this.http.get(this.baseUrl + 'orders/' + orderId);
}

createOrder(id: number) {
    return this.http.post(this.baseUrl + 'orders/createorder', {productId: id});
}
}
