import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactListComponent } from '../../contact-list/contact-list.component';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { ContactQueryComponent } from '../../contact-query/contact-query.component';
import { ContactService } from '../../service/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }


