import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @Output() cancelCreation = new EventEmitter();
  product: Product;
  productCreateForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private alertify: AlertifyService,
              private productService: ProductService) { }

  ngOnInit() {
    this.createProductCreateForm();
  }

  createProductCreateForm() {
    this.productCreateForm = this.fb.group({
      description: ['', Validators.required],
      productType: ['', Validators.required],
      price: ['', Validators.required],
      photoUrl: []
    });
  }

  createProduct() {
    this.product = Object.assign({}, this.productCreateForm.value);
    this.productService.createProduct(this.product).subscribe(next => {
      this.alertify.success('Item Added Successfully!');
      this.router.navigate['/products'];
    }, error => {
      this.alertify.error('Something went wrong with the creation. Please try again!');
      console.log(this.product);
    });
  }

  cancel() {
    this.cancelCreation.emit(false);
  }

}
