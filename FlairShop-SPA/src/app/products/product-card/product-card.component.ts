import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { User } from 'src/app/Models/user';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  role: string = this.authService.userToken.role;

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {

  }

  isVendor() {
    if (this.role === 'Vendor')
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
