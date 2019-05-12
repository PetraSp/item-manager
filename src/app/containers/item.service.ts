import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IItemsJSON } from '../models/itemsJSON';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl = 'api/data/items.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<IItemsJSON> {
    return this.http
      .get<IItemsJSON>(this.itemUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
