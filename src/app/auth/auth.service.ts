import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UsernameAvailableResponse {
  available: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  usernameAvailable(username: string) {
    this.http.post<{ UsernameAvailableResponse }>(
      'https://api.angular-email.com/auth/username',
      {
        username,
      }
    );
  }
}
