import { Component, OnInit } from '@angular/core';
import { AppcommonComponent } from '../appcommon/appcommon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Subscribe} from './subscribe.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
  providers: [AppcommonComponent]
})

export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  constructor( private _http: Http, private fb: FormBuilder, private _helper: AppcommonComponent) { }

  buildForm(): void {
    this.subscribeForm = this.fb.group({
      'emailaddress': ['', [Validators.required, Validators.email ]]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  subscribe({value}: {value: Subscribe} ) {
    if (this._helper.isValid(this.subscribeForm)) {
      console.log(value);
      let body =  JSON.stringify(value);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });

      this._http.post(`{_helper.baseURL}/api/member`, body, options).map((response: Response) => {
        console.log(response.json());
        response.json();
    }).subscribe();
  }
  }
}
