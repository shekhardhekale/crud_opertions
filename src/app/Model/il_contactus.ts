export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  companyName?: string;
  designation?: string;
  terms: boolean;
}