import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
    });
  }


  createOrder() {
    this.orderService.createOrder(this.product.id).subscribe(next => {
      this.alertify.success('Product Ordered Successful!');
    }, error => {
      this.alertify.error('Problem Creating the Order!');
    });
  }

}
