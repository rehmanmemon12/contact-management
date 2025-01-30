export interface EmailAddress {
  id: string;
  contactId: string;
  email: string;
  type?: 'personal' | 'work';
  primary: boolean;
}
