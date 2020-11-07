import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './vendors/vendor-details/vendor-details.component';
import { ProductDetailsResolver } from './Resolvers/product-details.resolver';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductUpdateResolver } from './Resolvers/product-update.resolver';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { VendorAddComponent } from './vendors/vendor-add/vendor-add.component';
import { VendorProductListComponent } from './vendors/vendor-product-list/vendor-product-list.component';
import { VendorDetailsResolver } from './Resolvers/vendor-details.resolver';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserDetailsResolver } from './Resolvers/user-details.resolver';
import { UserUpdateComponent } from './users/user-update/user-update.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'vendors', component: VendorListComponent},
            { path: 'vendors/details/:id', component: VendorDetailsComponent, resolve: {vendor: VendorDetailsResolver}},
            { path: 'vendors/add', component: VendorAddComponent},
            { path: 'vendors/products', component: VendorProductListComponent},
            { path: 'products', component: ProductListComponent},
            { path: 'products/create', component: ProductCreateComponent},
            { path: 'products/details/:id', component: ProductDetailsComponent, resolve: {product: ProductDetailsResolver}},
            { path: 'products/update/:id', component: ProductUpdateComponent, resolve: {product: ProductUpdateResolver}},
            { path: 'orders', component: OrderListComponent},
            { path: 'orders/details/:id', component: OrderDetailsComponent},
            { path: 'users/:id', component: UserDetailsComponent, resolve: {user: UserDetailsResolver}},
            { path: 'users/update/:id', component: UserUpdateComponent, resolve: {user: UserDetailsResolver}},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
