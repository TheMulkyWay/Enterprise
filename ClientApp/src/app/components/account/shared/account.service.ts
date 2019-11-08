
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountSummary } from './account-summary.type';
import { AccountDetail } from './account-detail.type';
import { AccountType } from './account-type.enum';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {

    }




  getAccountSummaries() {
    return this.http.get<AccountSummary[]>('api/Bank/GetAccountSummaries')
      .pipe(catchError(this.errorHandler))
      .toPromise()
  }
   


    //getAccountSummaries() {
    //  return this.http.get('api/Bank/GetAccountSummaries')
    //    //.map(response => response.json() as AccountSummary[])
    //   .toPromise();

    //    .pipe(catchError(this.errorHandler))

    //}


  getAccountDetail(id: string) {
    return this.http.get<AccountDetail>(`api/Bank/GetAccountDetail/${id}`) // note string interpolation
      .pipe(catchError(this.errorHandler))
      .toPromise();
  }




    //getAccountDetail(id: string) {
    //  return this.http.get(`api/Bank/GetAccountDetail/${id}`) // note string interpolation
    //    //.map(response => response.json() as AccountDetail)
    //    .toPromise()
    //    .pipe(catchError(this.errorHandler));
    //}






  errorHandler(error: Response) {
    console.log(error);
   return Observable.throw(error);
  }







}
