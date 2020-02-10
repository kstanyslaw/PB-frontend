import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const authData = {email, password};
    this.http.post<{token: string, userId: string}>(environment.api + '/auth/login', authData).subscribe(
      data => {
        console.log('token: ' + data.token);
        console.log('userId:  ' + data.userId);
      }
    );
  }
}
