import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent  implements OnInit{

  updateCustomerForm!: FormGroup;
  id: number | null = null;

  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private service:CustomerService,
    private router: Router
  ){}
  ngOnInit()
  {
    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      position: [null, [Validators.required]]
    });
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.getCustomerById();
  }

  getCustomerById()
  {
    if (this.id !== null) {
      this.service.getCustomerById(this.id).subscribe((res) => {
        console.log(res);
        this.updateCustomerForm.patchValue(res);
      });
    } else {
      console.error('Customer ID is not available.');
    }
  } 

  updateCustomer()
  {
    if (this.id !== null) {
     
    this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("");
    }
    );
    } else {
      console.error('Customer ID is not available.');
    }
  }
}
