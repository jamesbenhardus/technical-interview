import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly apiUrl = 'api';

  constructor(private http: HttpClient) {}

  getMessage() {
    const url = `${this.apiUrl}/message`;
    return this.http.get(url);
  }

  getFolders(id: number): Observable<unknown[]> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get<unknown[]>(url);
  }
}
