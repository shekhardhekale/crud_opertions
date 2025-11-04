import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConatctService } from '../../services/conatct.service';
import { Contact } from '../../Model/il_contactus';

@Component({
  selector: 'app-conatctus',
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  templateUrl: './conatctus.component.html',
  styleUrl: './conatctus.component.css'
})
export class ConatctusComponent implements OnInit {

contactForm:FormGroup
isEditMode = false;
editContactId: number | null = null;


submittedData: any[] = [];

  constructor( private fb:FormBuilder, private _conatctService : ConatctService){
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      companyName: [''],
      designation: [''],
      terms: [false, Validators.requiredTrue]
  })
  }
    

  
  ngOnInit(): void {
    this.loadContactusfiled();
  }
  submitForm(){
    if (this.contactForm.invalid) {
      return;
    }

    const contactData: Contact = this.contactForm.value;
    
    if(this.isEditMode && this.editContactId !== null){
      contactData.id = this.editContactId;
      this._conatctService.updateContact(contactData).subscribe(() =>{
       this.loadContactusfiled();
       this.resetForm();
      })
    }else{
      this._conatctService.addContact(contactData).subscribe(() =>{
        this.loadContactusfiled();
        this.resetForm();
      })
    }
  }

  loadContactusfiled(){
     this._conatctService.getContacts().subscribe((data) =>{
      this.submittedData = data;
     })
  }

  resetForm(){
    this.isEditMode = false;
    this.contactForm.reset();
  }

  editContact(contact: Contact){
   this.isEditMode = true;
   this.editContactId = contact.id || null;
    this.contactForm.patchValue(contact);
  }
   deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this._conatctService.deleteContact(id).subscribe(() => {
        this.loadContactusfiled();
      });
    }
  }

}
