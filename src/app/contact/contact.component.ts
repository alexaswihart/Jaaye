import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    "./contact.component.scss", "../../styles.scss"
  ]
})
export class ContactComponent {
  contactForm = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    permission: new FormControl('', Validators.required)
  });

  submit(){
    //this.contactForm.validator()
  }
}
