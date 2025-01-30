import { Injectable } from '@angular/core';
import {Contact} from '../models/contact/contact.model';
import {forkJoin, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EmailAddress} from '../models/contact/email-address.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://679a6132747b09cdccceaf36.mockapi.io/api/v1/demo';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`).pipe(
      map(contacts => contacts.map(c => ({
        ...c,
        createdAt: new Date(c.createdAt)
      })))
    );
  }

  getContactWithEmails(id: string): Observable<{ contact: Contact; emails: EmailAddress[] }> {
    return forkJoin({
      contact: this.http.get<Contact>(`${this.apiUrl}/contacts/${id}`),
      emails: this.http.get<EmailAddress[]>(`${this.apiUrl}/contacts/${id}/email_addresses`)
    }).pipe(
      map(({ contact, emails }) => ({
        contact: {
          ...contact,
          createdAt: new Date(contact.createdAt)
        },
        emails
      }))
    );
  }
}
