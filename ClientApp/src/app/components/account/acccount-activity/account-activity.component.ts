import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

import { AccountTransaction } from '../shared/account-transaction.type';
import { AccountService } from '../shared/account.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
    selector: 'account-activity',
    templateUrl: './account-activity.component.html'
})
export class AccountActivityComponent {
    @Input() accountTransactions: AccountTransaction[];
  private UrlCurrencies = "https://api.coinmarketcap.com/v1/ticker/?limit?=10";

  constructor(private http: HttpClient) {
    }

  getCurrencyRates() {
    return this.http.get(this.UrlCurrencies)
      .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse) {
    alert(error.message);
    return throwError('Error in Http service');
  }




}
