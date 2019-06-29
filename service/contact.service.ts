import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  private contactUrl: string;
 
  constructor(private http: HttpClient) {
    this.contactUrl = 'http://localhost:8080/contact';
  }
 
  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl+'/findAll');
  }
 
  public save(contact: Contact) {
    return this.http.post<Contact>(this.contactUrl, contact);
  }
}
