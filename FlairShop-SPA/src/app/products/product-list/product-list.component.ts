import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  role: string = this.authService.userToken.role;

  constructor(private productService: ProductService, private alertify: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => { this.products = products; },
    error => {
      this.alertify.error(error);
    });
  }

  isVendor() {
    if (this.role === 'True')
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
