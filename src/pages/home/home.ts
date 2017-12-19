import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
// import {agehigh} from './home.validator';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  userForm: FormGroup;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [this.agehigh, Validators.required]),
      email: new FormControl('', [this.emailattheratenotpresent,this.blacklistedEmail,Validators.required]),
      qualification: new FormControl('Btech'),
      experienceYr: new FormControl('0'),
      experienceMon: new FormControl('0'),
      mobileno: new FormControl('91', [this.phonenoinvalid, Validators.required]),
    })
  }

  agehigh(control: FormControl) {
    if (control.value != null) {
      if (control.value.toString().length > 2) {
        return { 'agetoohigh': true }
      }
      return null;

    }
  }

  phonenoinvalid(control: FormControl) {
    if (control.value != null) {
      if (control.value.toString().length > 12 || control.value.toString().length < 12) {
        return { 'phonenoinvalid': true }
      }
      return null;

    }
  }

  blacklistedEmail(control: FormControl) {
    var bm: string[]=["abc@gmail.com","abcd@gmail.com"];

    if (control.value != null) {
      for (var i = 0; i < bm.length; i++) {
        if (control.value == bm[i]) {
          return {'emailblacklisted': true }
        }
        if(i==bm.length-1){
          return null;
        }

      }
    }

  }

  emailattheratenotpresent(control:FormControl){

    if(control.value!=null){
      if(!control.value.toString().includes("@")){
        return {'attheratenotpresent':true}
      }
      return null;
    }

  }


  onSubmit(userForm: FormGroup) {
    console.log(userForm);
  }


}
