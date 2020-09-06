import { AuthService } from './../auth.service';

import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: FormControl) => {
    const { value } = control;
    // console.log(value);
    return this.authService.usernameAvailable(value).pipe(
      //   map((value) => {
      //     if (value.available) return null;
      //   }),
      map(() => {
        return null;
      }),
      catchError((err) => {
        //console.log(err);
        //making a Observable
        if (err.error.username) return of({ notunique: true });
        else return of({ noconnection: true });
      })
    );
  };
}
