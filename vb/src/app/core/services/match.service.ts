import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from '../models/match';
import { map } from 'rxjs/operators';
import { QueryParams } from '../models/query-params';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url = '/api/match/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  query: QueryParams = {
    'page': String(1),
    'pagesize': String(2)
  };

  constructor(
    private http: HttpClient,
  ) { }


  getMatches(query: QueryParams): Observable<Match[]> {
    return this.http.get<Match[]>(this.url, {
      params: query,
    }).pipe(
      map(
        matches => {
          return matches['results'].map(
            match => new Match(match)
          )
        }
      )
    );
  }

  getMatch(id: number): Observable<Match> {
    const url = `${this.url}${id}/`
    return this.http.get<Match>(url).pipe(
      map(
        match => new Match(match)
      )
    )
  }
}
