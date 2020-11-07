import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService, private route: ActivatedRoute,
              private alertify: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    }, error => {
      this.alertify.error('Problem retrieving data!');
    });
  }

}
