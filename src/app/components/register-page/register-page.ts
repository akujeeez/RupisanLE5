import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstName: null,
    lastName: null
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log(this.form);
    this.http.post(
      'http://localhost:5041/api/Login/register',
      this.form,
      { responseType: 'text' }
    ).subscribe(data => {
      this.router.navigate(['/login'])
    })
  }
}