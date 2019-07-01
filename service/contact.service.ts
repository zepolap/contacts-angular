import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs/Observable';
import { ContactRequestFirstnameAndLastname } from '../model/contact-request-firstname_and_lastname';

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

  public delete(contact: ContactRequestFirstnameAndLastname) {
   // let httpParams = new HttpParams().set('firstname', 'lastname');
   //httpParams.set(contact.firstname, contact.lastname);
   //let options = { params: httpParams };
   // console.log(options)

   // let headers = new Headers({ 'Content-Type': 'application/json'});
   // let options = new RequestOptions({ headers: headers });
    
   // console.log(headers);
   //console.log(options);
   //{headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
   
    //return this.http.delete(this.contactUrl+'/deleteByFirstnameAndLastname', {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        firstname: contact.firstname,
        lastname: contact.lastname,
      },
    };
    
    return this.http.delete(this.contactUrl+'/deleteByFirstnameAndLastname', options);
  }
}
