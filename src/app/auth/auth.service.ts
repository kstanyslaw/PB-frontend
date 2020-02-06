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
    this.http.post<{token: string}>(environment.api + '/auth/login', authData).subscribe(
      token => console.log(token)
    );
  }
}
