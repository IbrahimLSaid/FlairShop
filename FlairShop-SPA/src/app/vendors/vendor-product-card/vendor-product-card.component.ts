import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-vendor-product-card',
  templateUrl: './vendor-product-card.component.html',
  styleUrls: ['./vendor-product-card.component.css']
})
export class VendorProductCardComponent implements OnInit {
  @Input() product: Product;
  role: string = this.authService.userToken.role;

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {

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

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
  }
}
