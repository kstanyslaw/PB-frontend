import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  login(email: string, password: string) {
    const authData = {email, password};
    this.http.post<{token: string, userId: string}>(environment.api + '/auth/login', authData).subscribe(
      data => {
        this.token = data.token;
        console.log('token: ' + data.token);
        console.log('userId:  ' + data.userId);
      }
    );
  }
}
