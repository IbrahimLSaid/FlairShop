import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../Models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
    jwtHelper = new JwtHelperService();
    decodedToken: any;
constructor(private http: HttpClient) { }

baseUrl = 'http://localhost:5000/api/auth/';
userToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));


login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe( // 46
        map((response: any) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
            }
        })
    );
}
loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }


logout() {
    localStorage.removeItem('token');
    console.log('logged out');
}

register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
}


}
