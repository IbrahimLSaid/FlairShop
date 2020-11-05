import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { Vendor } from 'src/app/Models/vendor';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];

  constructor(private http: HttpClient, private vendorService: VendorService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.vendorService.getVendors().subscribe((vendors: Vendor[]) => { this.vendors = vendors; },
    error => {
      this.alertify.error(error);
    });
  }
}
