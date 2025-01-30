// mock-data.ts

import {Contact} from '../core/models/contact/contact.model';
import {EmailAddress} from '../core/models/contact/email-address.model';

export const MOCK_CONTACTS: Contact[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St, New York, NY',
    company: 'Tech Corp',
    jobTitle: 'Software Engineer',
    phoneNumber: '+1 (555) 123-4567',
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    address: '456 Oak Ave, Los Angeles, CA',
    company: 'Design Studio',
    jobTitle: 'UX Designer',
    phoneNumber: '+1 (555) 234-5678',
    createdAt: new Date('2023-02-20'),
  },
  {
    id: '3',
    firstName: 'Bob',
    lastName: 'Johnson',
    company: 'Startup Inc',
    jobTitle: 'Product Manager',
    createdAt: new Date('2023-03-10'),
  },
  {
    id: '4',
    firstName: 'Alice',
    lastName: 'Williams',
    address: '789 Pine Rd, Chicago, IL',
    phoneNumber: '+1 (555) 345-6789',
    createdAt: new Date('2023-04-05'),
  },
  {
    id: '5',
    firstName: 'Charlie',
    lastName: 'Brown',
    company: 'Digital Solutions',
    jobTitle: 'CTO',
    createdAt: new Date('2023-05-01'),
  }
];

export const MOCK_EMAILS: EmailAddress[] = [
  // Contact 1 Emails
  {
    id: '1',
    contactId: '1',
    email: 'john.doe@techcorp.com',
    type: 'work',
    primary: true
  },
  {
    id: '2',
    contactId: '1',
    email: 'johndoe@gmail.com',
    type: 'personal',
    primary: false
  },

  // Contact 2 Emails
  {
    id: '3',
    contactId: '2',
    email: 'jane.smith@designstudio.com',
    type: 'work',
    primary: true
  },
  {
    id: '4',
    contactId: '2',
    email: 'jsmith@personal.com',
    type: 'personal',
    primary: false
  },

  // Contact 3 Emails
  {
    id: '5',
    contactId: '3',
    email: 'bob.johnson@startup.com',
    primary: true
  },

  // Contact 4 Emails
  {
    id: '6',
    contactId: '4',
    email: 'alice.w@example.com',
    type: 'personal',
    primary: true
  },
  {
    id: '7',
    contactId: '4',
    email: 'awilliams@workmail.com',
    type: 'work',
    primary: false
  },

  // Contact 5 Emails
  {
    id: '8',
    contactId: '5',
    email: 'charlie.b@digitalsolutions.com',
    type: 'work',
    primary: true
  }
];
