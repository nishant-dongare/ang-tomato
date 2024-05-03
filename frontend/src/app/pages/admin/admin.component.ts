import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ADMIN_URL } from 'src/app/shared/constants/urls';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  id: string = '';
  constructor(private http: HttpClient, private userService: UserService) {
    this.login();
    console.log(this.id);
  }

  login(): Observable<string> {
    return this.http
      .get<string>(
        ADMIN_URL +
          this.userService.userObservable.subscribe({ next: (id) => id })
      )
      .pipe(
        tap({
          next: (id) => {
            this.id = id;
            console.log(id);
          },
          error: (errorResponse) => {
            console.log(errorResponse);
          },
        })
      );
  }
}
