import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {AlertProvider} from "../../providers/alert/alert"
import {AuthProvider} from "../../providers/auth/auth"
/**
 * Generated class for the N2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n2',
  templateUrl: 'n2.html',
})
export class N2Page {
  myForm:any;
  formValues = {
    pass2:"20606280"
    ,signupAttemt:false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private formBuilder:FormBuilder, public InputVal:InputValidatorProvider
  ,private AlertP:AlertProvider, private AuthP:AuthProvider) {

    this.myForm = this.formBuilder.group({
       email: ['azolotloner@gmail.com', (control: FormControl)=>{
         if(this.InputVal.isValid_Email(control.value)){
           return null;
         }else{
           return {"InvalidEmail":true}
         }
       }],
       password: ['20606280', (control: FormControl)=>{
         if(this.InputVal.isString_LongerThan(4, control.value) && this.InputVal.isString_ShorterThan(200, control.value)){
           return null;
         }else{
           return {"InvalidPassword":true}
         }
       }],
       username:['azolot', (control: FormControl)=>{
         if(this.InputVal.isString_LongerThan(2, control.value) && this.InputVal.isString_ShorterThan(40, control.value)){
           return null;
         }else{
           return {"InvalidUsername":true}
         }
       }, (control:FormControl)=>{
         //Check if username has been used.
         return new Promise((accept, reject)=>{
           accept(null);
         });
       }],
       password2:['20606280', (control: FormControl)=>{
         if(this.InputVal.isString_LongerThan(2, control.value) && this.InputVal.isString_ShorterThan(200, control.value)){
           if(control.value !== control.value){
             return {"UnmatchingPasswords":true};
           }
           return null;
         }else{
           return {"InvalidPassword":true}
         }
       }],
       TCCheck:[true, (control: FormControl)=>{
         if(!control.value){
           return {"AcceptedTermsAndConditions":false};
         }else{
           return false;
         }
       }]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N2Page');
  }

  signUp(){
    this.formValues.signupAttemt = true;
    let loading = this.AlertP.generateSimpleLoading(null);
    loading.present();
    if(this.myForm.valid){
      this.AuthP.signUp(this.myForm.controls.email.value, this.myForm.controls.password.value)
      .then((data)=>{
        loading.dismiss();
        console.log("Result from signUp: ",data);
      })
      .catch((err)=>{
        loading.dismiss();
        this.AlertP.generateSimpleAlert("Error Signing Up", err.text);
      });
    }else{
      loading.dismiss();
      this.AlertP.generateSimpleAlert("Error", "Please check your data");
    }
  }

}
