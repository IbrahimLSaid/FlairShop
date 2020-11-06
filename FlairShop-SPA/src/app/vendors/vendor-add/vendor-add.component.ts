import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Models/vendor';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent implements OnInit {
  @Output() cancelCreation = new EventEmitter();
  vendorAddForm: FormGroup;
  vendor: Vendor;


  constructor(private router: Router, private fb: FormBuilder, private alertify: AlertifyService,
              private vendorService: VendorService) { }

  ngOnInit() {
    this.createVendorAddForm();
  }

  createVendorAddForm() {
    this.vendorAddForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      estateAddress: ['', Validators.required],
      photoUrl: ['']
    });
  }

  cancel() {
    this.cancelCreation.emit(false);
  }

  activateVendor() {
    this.vendor = Object.assign({}, this.vendorAddForm.value);
    this.vendorService.activateVendor(this.vendor).subscribe(next => {
      this.alertify.success('Vendor Activated Successfully!');
      this.router.navigate['/vendors'];
    }, error => {
      this.alertify.error('Something went wrong with the activation. Please try again!');
      console.log(this.vendor);
    }, () => {
      this.router.navigate['/products'];
    });
  }

}
