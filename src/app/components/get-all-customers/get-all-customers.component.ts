import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.css'
})
export class GetAllCustomersComponent {

  customers: any=[];

  constructor(private customerService: CustomerService,private router: Router){

  }    
  ngOnInit(){
  this.getAllCustomer();
  }

  getAllCustomer(){
    this.customerService.getAllCustomer().subscribe((res) => {
      this.customers =res;
    })
  }
  deleteCustomer(id: number)
  {
    this.customerService.deleteCustomer(id).subscribe((res) => {
      this.customers =res;
      this.getAllCustomer();
    })
  }
  navigate(id: string | number) {
    this.router.navigate(['/customer', id]);
  }
  moveToPost(){
    this.router.navigate(['/customer']); 
  }
}
