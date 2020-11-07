import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  @ViewChild('editProductForm') editProductForm: NgForm;
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(next => {
      this.alertify.success('Item Updated Successfully!');
      this.editProductForm.reset(this.product);
    }, error => {
      this.alertify.error('Problem Updating Product!');
    });
  }

}
