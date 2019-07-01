import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';
import { ContactRequestFirstnameAndLastname } from '../model/contact-request-firstname_and_lastname';

@Component({
  selector: 'app-contact-query',
  templateUrl: './contact-query.component.html',
  styleUrls: ['./contact-query.component.css']
})
export class ContactQueryComponent {

  contact: ContactRequestFirstnameAndLastname;
 
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {
    this.contact = new ContactRequestFirstnameAndLastname();
  }
 
  onSubmit() {
    this.contactService.delete(this.contact).subscribe(result => this.gotoContactList());
  }
 
  gotoContactList() {
    this.router.navigate(['/contacts']);
  }
}
