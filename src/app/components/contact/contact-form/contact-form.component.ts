import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})

/**
 * Contact form component used in the contact page component
 */
export class ContactFormComponent {
  // The form that contains all the fields
  contactForm: FormGroup;

  // Indicates whether the form is in submitted state (the user clicked the submit button) or not
  submitted = false;

  // Getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  /**
   * ContactFormComponent constructor
   * **
   * Defines the validators for each form field
   * **
   * @param fb The form builder used to construct the form
   * @param connectionService Injects the ConnectionService in the component
   */
  constructor(
    private fb: FormBuilder,
    private connectionService: ConnectionService
  ) {
    // Defines the validators for each form field
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

  /**
   * Handles cliking on the "Submit" button
   * **
   * If the form is valid, the email is sent via the ConnectionService that connects to the backend API
   */
  onSubmit() {
    this.submitted = true;

    // Stops here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Sends the message via the ConnectionService and checks success
    this.connectionService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('We have successfully received your message.');
        this.contactForm.reset();
      },
      (error) => {
        alert(
          'Sorry, an error occured. There might be a problem with your email address.'
        );
        console.log('Error', error);
      }
    );
  }

  /**
   * Resets the form after submitting
   */
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
