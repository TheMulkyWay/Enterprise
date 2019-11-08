import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }

  getEmployees() {
    return this._http.get(this.myAppUrl + 'api/Employee/Index')
      .pipe(catchError(this.errorHandler))
      }

  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
      .pipe(catchError(this.errorHandler))
  }

  saveEmployee(employee: number) {
    return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
       .pipe(catchError(this.errorHandler))
  }

  updateEmployee(employee: number) {
    return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)
      .pipe(catchError(this.errorHandler))
  }

  deleteEmployee(id: number) {
    return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id)
        .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}
