import { Component, OnInit, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title: string = 'Myma ~ Contact';

  submitted = false;

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  // convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    } else {
      this.disabledSubmitButton = true;
    }
  }

  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: [
        '',
        Validators.compose([Validators.required, Validators.email]),
      ],
      contactFormSubjects: ['', Validators.required],
      contactFormMessage: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
