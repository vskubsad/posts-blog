import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {
    const token = this.route.snapshot.queryParams['jwt_token'];
    // console.log('token', token);
    sessionStorage.setItem('access_token', token);
    if (token) {
      this.router.navigate(['dashboard']);
    }
  }

  socialLogin(loginType: string) {
    const url =
      loginType === 'google' ? loginUrl.googleLogin : loginUrl.facebookLogin;
    this.http.get(url).subscribe(
      (response) => {
        // console.log(response);
        sessionStorage.setItem(
          'access_token',
          this.route.snapshot.queryParams['jwt_token']
        );
        this.router.navigate(['dashboard']);
      },
      (error) => console.log(error)
    );
  }
}
