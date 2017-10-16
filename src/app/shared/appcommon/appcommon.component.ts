import { Component, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-appcommon',
  templateUrl: './appcommon.component.html',
  styleUrls: ['./appcommon.component.css']
})

@Injectable()
export class AppcommonComponent {

  constructor(private snackBar: MatSnackBar) { }

  public baseURL = 'http://localhost:54345/';

  // tslint:disable-next-line:member-ordering
  formErrors = {
    'required': '',
    'email': ''
  };
  // tslint:disable-next-line:member-ordering
  validationMessages = {
    'emailaddress': {
      'required': 'Please provide valid email address.',
      'email' : 'Please provide valid email address'
    }
  };

  public isValid(form: FormGroup) {

    let noErrorFound = true;
    Object.keys(form.controls).map(key => {
      const errors = form.controls[key].errors;
      const control = form.controls[key];
      if (errors === null) { return null; }
      if (noErrorFound === true) {
        const messages = this.validationMessages[key];
        for (const key in errors) {
          this.snackBar.open(`${messages[key]}`, '', {
            duration: 2000,
            extraClasses: ['error-snackbar']            
          });
          noErrorFound = false;
          break;
        }
      }
    });

    return noErrorFound ;
  }
}
