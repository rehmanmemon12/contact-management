export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  address?: string;
  company: string;
  jobTitle?: string;
  phoneNumber?: string;
  image? : string;
  createdAt: Date;
}
