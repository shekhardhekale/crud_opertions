import { Injectable } from '@angular/core';
import { Contact } from '../Model/il_contactus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConatctService {

  objContactUs!: Contact;

   private apiUrl = 'http://localhost:3000/contacts';

  constructor(private http:HttpClient) {
    
   }
   getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${contact.id}`, contact);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
