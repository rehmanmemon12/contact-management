import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../../core/models/contact/contact.model';
import {ContactService} from '../../core/service/contact.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-contact-list',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIcon,
    MatIconModule,
    MatProgressSpinner
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})

export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  visibleContacts: Contact[] = [];
  selectedContact: Contact | null = null;
  loading: boolean = true;
  currentPage: number = 0;
  pageSize: number = 10;
  searchQuery: string = '';
  filteredContacts: Contact[] = [];

  @Output() contactSelected = new EventEmitter<string>();
  @Output() contactHideShow = new EventEmitter<boolean>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  private loadContacts(): void {
    this.contactService.getContacts().subscribe({
      next: contacts => {
        this.contacts = contacts;
        this.filteredContacts = contacts;
        this.updateVisibleContacts();
        this.loading = false;
      },
      error: () => {
        // TODO: Add proper error handling
        this.loading = false;
      }
    });
  }

  private updateVisibleContacts(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.visibleContacts = this.filteredContacts.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if ((this.currentPage + 1) * this.pageSize < this.filteredContacts.length) {
      this.currentPage++;
      this.updateVisibleContacts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisibleContacts();
    }
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
    this.contactSelected.emit(contact.id);
  }

  searchContacts(query: Event): void {
    const target = query.target as HTMLInputElement;
    const queryValue = target.value;
    this.searchQuery = queryValue.toLowerCase();
    this.currentPage = 0; // Reset to first page

    this.filteredContacts = this.contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(this.searchQuery) ||
      contact.lastName.toLowerCase().includes(this.searchQuery) ||
      contact.company.toLowerCase().includes(this.searchQuery)
    );

    this.updateVisibleContacts();
  }

  hideContactDetail() {
    this.contactHideShow.emit();
  }
}
