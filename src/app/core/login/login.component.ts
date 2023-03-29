import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';
import { loginUrl } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    const token = this.route.snapshot.queryParams['jwt_token'];
    sessionStorage.setItem('access_token', token);
    if (token) {
      this.loginService.changeLoginStatus(true)
      this.router.navigate(['dashboard']);

    }
  }

  socialLogin(loginType: string) {
    const url =
      loginType === 'google' ? loginUrl.googleLogin : loginUrl.facebookLogin;
    this.http.get(url).subscribe(
      (response) => {
        sessionStorage.setItem(
          'access_token',
          this.route.snapshot.queryParams['jwt_token']
        );
        this.loginService.changeLoginStatus(true)
        this.router.navigate(['dashboard']);
      },
      (error) => console.log(error)
    );
  }
}
