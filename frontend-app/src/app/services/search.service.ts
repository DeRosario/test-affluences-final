import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import * as moment from 'moment';
import {
  BehaviorSubject, Observable
} from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) {}

  searchDate = new BehaviorSubject <string> ('');

  getReservation(date: Date, time: string[]): Observable<{isAvailable: boolean}> {
    const dateFormatted = moment(date).add(time[0], 'hours').add(time[1], 'minutes').format('YYYY-MM-DD HH:mm:ss');
    this.searchDate.next(dateFormatted);
    return this.http.get<{isAvailable: boolean}>(`/api/reservation?date=${dateFormatted}&id=1337`);
  }
}