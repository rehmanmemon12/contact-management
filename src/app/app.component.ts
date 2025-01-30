import { Component } from '@angular/core';
import {ContactListComponent} from './modules/contact-list/contact-list.component';
import {ContactDetailsComponent} from './modules/contact-details/contact-details.component';
import {Contact} from './core/models/contact/contact.model';
import {EmailAddress} from './core/models/contact/email-address.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ContactListComponent, ContactDetailsComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-management';
  selectedContactId: string | null = null;
  selectedContactData: { contact: Contact; emails: EmailAddress[] } | null = null;
  isHide: boolean = true;

  onContactSelected(contactId: string): void {
    this.selectedContactId = contactId;
    this.selectedContactData = null;
  }

  hideContactDetails(): void {
    this.isHide = !this.isHide;
  }
}
