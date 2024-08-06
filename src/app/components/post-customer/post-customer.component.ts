import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent  implements OnInit{
  postCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      position: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res) => {
      this.router.navigateByUrl("")
    }
  )
  }
}
