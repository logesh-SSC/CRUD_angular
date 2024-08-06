import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-debug-http-client',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './debug-http-client.component.html',
  styleUrls: ['./debug-http-client.component.css']
})
export class DebugHttpClientComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (response) => {
        this.data = response;
        console.log('Data fetched successfully', this.data);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
