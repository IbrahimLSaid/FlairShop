import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './Services/auth.service';
import { AlertifyService } from './Services/alertify.service';
import { ProductService } from './Services/product.service';
import { appRoutes } from './routes';
import { AuthGuard } from './Guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorService } from './Services/vendor.service';
import { VendorCardComponent } from './vendors/vendor-card/vendor-card.component';
import { VendorDetailsComponent } from './vendors/vendor-details/vendor-details.component';
import { ProductDetailsResolver } from './Resolvers/product-details.resolver';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductUpdateResolver } from './Resolvers/product-update.resolver';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { VendorAddComponent } from './vendors/vendor-add/vendor-add.component';
import { VendorProductListComponent } from './vendors/vendor-product-list/vendor-product-list.component';
import { VendorProductCardComponent } from './vendors/vendor-product-card/vendor-product-card.component';
import { VendorDetailsResolver } from './Resolvers/vendor-details.resolver';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      RegisterComponent,
      NavComponent,
      ProductListComponent,
      ProductCardComponent,
      ProductDetailsComponent,
      VendorListComponent,
      VendorCardComponent,
      VendorDetailsComponent,
      ProductUpdateComponent,
      ProductCreateComponent,
      VendorAddComponent,
      VendorProductListComponent,
      VendorProductCardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    ProductService,
    VendorService,
    ProductDetailsResolver,
    ProductUpdateResolver,
    VendorDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
