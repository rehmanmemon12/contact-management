import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Contact} from '../../core/models/contact/contact.model';
import {ContactService} from '../../core/service/contact.service';
import {NgForOf, NgIf} from '@angular/common';
import {EmailAddress} from '../../core/models/contact/email-address.model';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatFabButton} from '@angular/material/button';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-details',
  imports: [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatFabButton,
    MatProgressSpinner,
    NgIf
  ],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss',
  standalone: true
})
export class ContactDetailsComponent implements OnInit, OnChanges {

  @Input() contactId!: string;
  contactData: {
    contact: Contact; emails: EmailAddress[]
  } | null = null;
  loading: boolean = false;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.contactId) {
      this.loadContactDetails();
    }
  }

  private loadContactDetails(): void {
    this.loading = true;
    this.contactService.getContactWithEmails(this.contactId).subscribe({
      next: (data) => {
        this.contactData = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

}
