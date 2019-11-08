import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { AccountSummary } from './account-summary.type';
import { AccountDetail } from './account-detail.type';
import { AccountType } from './account-type.enum';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {

    }

    getAccountSummaries() {
        //return this.http.get('api/Bank/GetAccountSummaries')
        //                   .toPromise();

      return this.http.get<AccountSummary[]>('api/Bank/GetAccountSummaries')
        .toPromise();

    }

    getAccountDetail(id: string) {
        //return this.http.get(`api/Bank/GetAccountDetail/${id}`) // note string interpolation
        //                   .toPromise();

      return this.http.get<AccountDetail>(`api/Bank/GetAccountDetail/${id}`) // note string interpolation
        .toPromise();

    }
}
