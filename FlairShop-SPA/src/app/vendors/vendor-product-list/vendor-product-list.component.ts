import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-product-list',
  templateUrl: './vendor-product-list.component.html',
  styleUrls: ['./vendor-product-list.component.css']
})
export class VendorProductListComponent implements OnInit {
  products: Product[];
  role: string = this.authService.userToken.role;

  constructor(private productService: ProductService, private alertify: AlertifyService, private authService: AuthService,
              private vendorService: VendorService) { }

  ngOnInit() {
    this.vendorService.getMyVendorProducts().subscribe((products: Product[]) => { this.products = products; },
    error => {
      this.alertify.error(error);
    });
  }

  isVendor() {
    if (this.authService.isVendor())
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
