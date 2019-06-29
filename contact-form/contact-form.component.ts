import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact: Contact;
 
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {
    this.contact = new Contact();
  }
 
  onSubmit() {
    this.contactService.save(this.contact).subscribe(result => this.gotoContactList());
  }
 
  gotoContactList() {
    this.router.navigate(['/contacts']);
  }
}
