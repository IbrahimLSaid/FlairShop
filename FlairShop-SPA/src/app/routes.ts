import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ParcelsComponent } from './parcels/parcels.component';
// import { PartnersComponent } from './partners/partners.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorDetailsComponent } from './vendors/vendor-details/vendor-details.component';
import { ProductDetailsResolver } from './Resolvers/product-details.resolver';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductUpdateResolver } from './Resolvers/product-update.resolver';
import { ProductCreateComponent } from './products/product-create/product-create.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'vendors', component: VendorListComponent},
            { path: 'vendors/details/:id', component: VendorDetailsComponent},
            { path: 'products', component: ProductListComponent},
            { path: 'products/create', component: ProductCreateComponent},
            { path: 'products/details/:id', component: ProductDetailsComponent, resolve: {product: ProductDetailsResolver}},
            { path: 'products/update/:id', component: ProductUpdateComponent, resolve: {product: ProductUpdateResolver}},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
