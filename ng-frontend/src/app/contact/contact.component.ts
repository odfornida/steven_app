import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import { PhotosService } from '../photos.service';
import { FormControl, Validators, NgModel } from '@angular/forms';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() emailInput: string;
  validEmail = false;
  formData = {
    name: '',
    number: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(public photoService: PhotosService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  inputChanged() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.validEmail = re.test(String(this.emailInput).toLowerCase());
    //console.log(this.validEmail, this.user_input);
  }

  submitForm() {
    console.log('formData = ', this.formData);
    //this.http.post('http://someurl', JSON.stringify(this.formData))/*.subscribe(...)*/;
  }

}
