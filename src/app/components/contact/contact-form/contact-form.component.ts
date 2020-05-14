import { Component, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
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
        alert('We have successfully received your message.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        alert(
          'Sorry, an error occured. There might be a problem with your email address.'
        );
        console.log('Error', error);
      }
    );
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
