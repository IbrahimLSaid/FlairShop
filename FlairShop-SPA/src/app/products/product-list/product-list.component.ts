import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => { this.products = products; },
    error => {
      this.alertify.error(error);
    });
  }

}
