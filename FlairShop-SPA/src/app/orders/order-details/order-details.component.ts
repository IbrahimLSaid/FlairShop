import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderService.getOrder(this.route.snapshot.params.id).subscribe((order: Order) => {
      this.order = order;
    }, error => {
      this.alertify.error(error);
    });
  }
}
