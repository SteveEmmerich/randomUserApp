import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  endpoint = environment.userEndpoint;
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http
      .get<{ results }>(this.endpoint)
      .pipe(map(({ results }) => results));
  }
}
