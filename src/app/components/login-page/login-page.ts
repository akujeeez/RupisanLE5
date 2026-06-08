import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface LoginPostData {
  id_token: string;
  id: number;
}

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    const { username, password } = this.form;
    this.http.post<LoginPostData>(
      'http://localhost:5041/api/Login/login',
      { username, password }
    ).subscribe(data => {
      window.sessionStorage.setItem('auth-token', data.id_token);
      window.sessionStorage.setItem('auth-user', data.id.toString());
      this.router.navigate(['/']);
      window.location.reload();
    })
  }
}