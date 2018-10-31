import { Injectable, Inject, Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const url = 'https://rocky-peak-53437.herokuapp.com/mail' ;



@Injectable({
  providedIn: 'root'
})
export class SendgridService {

  constructor(@Inject('config') private config , public http: HttpClient, ) {
}
public BasicEmailToSingleUser( to: string, from: string, subject: string, content: string) {

  const header = new HttpHeaders()
  .set('Content-Type', 'application/x-www-form-urlencoded');
  const params =  new HttpParams()
  .set('id', this.config.token)
  .set('to', to)
  .set('from', from)
  .set('subject', subject)
  .set('content', content);

  return this.http.post(url,
   params, {headers: header});
}
}

