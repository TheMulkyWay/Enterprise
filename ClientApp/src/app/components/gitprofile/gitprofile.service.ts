
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { log } from 'util';

@Injectable()
export class GitProfileService {
    private username: string;
    private client_id = '3f439212f7352910dcf2';
    private client_secret = 'ae7a1c5c5d90106e9c2bfdfff8c71427af4d39d6';

  constructor(private _http: HttpClient) {
        console.log('Github Service is ready');
         this.username='TheMulkyWay';
       // this.username = 'bradtraversy';
    }


    getUser() {
      return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .pipe(catchError(this.errorHandler));

    }


    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
          .pipe(catchError(this.errorHandler));

    }

    updateUser(username: string) {
        this.username = username;

    }


  errorHandler(error: HttpErrorResponse) {
  "kudos points to you for looking here, this is just showing the response for exactly what is typed in, as its typed .." +
    console.log(error.message)
   // alert(error.message);
    return '';
  //  return throwError('Error in Http service');
  }

}

