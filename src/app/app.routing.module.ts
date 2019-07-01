import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from '../../contact-list/contact-list.component';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { ContactQueryComponent } from '../../contact-query/contact-query.component';
 
const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'addcontact', component: ContactFormComponent },
  { path: 'delcontact', component: ContactQueryComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }