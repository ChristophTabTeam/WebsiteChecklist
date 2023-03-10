import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: `24dd739a-68dd-4233-8d67-ea05385662ea`,
});

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  // @Output() submited = new EventEmitter<boolean>();
  submited: boolean = false;
  isLinear: boolean = false;

  constructor(private http: HttpClient) {}

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    branche: new FormControl('', Validators.required),
    usageOfWebsite: new FormControl('', Validators.required),
    design: new FormControl('', Validators.required),
    form: new FormControl(false),
    newsletter: new FormControl(false),
    notSure: new FormControl(false),
    other: new FormControl(''),
    content: new FormControl('', Validators.required),
    domainHosting: new FormControl('', Validators.required),
    seo: new FormControl('', Validators.required),
    support: new FormControl('', Validators.required),
    additionalInfo: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.required),
    conclusion: new FormControl(false, Validators.required)
  });


  ngOnInit() {}

  async submitForm() {
    this.http
      .post('https://localhost:7108/api/WebsiteChecklists', this.form.value, {
        headers: headers,
      })
      .subscribe((response) => {
        console.log(response);
      });
    setTimeout(() => {
      this.form.reset();
      this.submited = true;
    }, 1000);
  }
}
