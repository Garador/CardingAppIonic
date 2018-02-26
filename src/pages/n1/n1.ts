import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormControl} from "@angular/forms";
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {AuthProvider} from "../../providers/auth/auth";
import {AlertProvider} from "../../providers/alert/alert"
import {SystemMessagesProvider} from "../../providers/system-messages/system-messages"

import {N2Page} from "../n2/n2";

/**
 * Generated class for the N1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n1',
  templateUrl: 'n1.html',
})
export class N1Page {

  myForm:any;
  logInAttempt = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder:FormBuilder, public InputVal:InputValidatorProvider,
    private Auth:AuthProvider, private AlertP:AlertProvider, private SMP:SystemMessagesProvider) {
    this.myForm = formBuilder.group({
       email: ['azolotloner@gmail.com', (control: FormControl)=>{
         if(InputVal.isValid_Email(control.value)){
           return null;
         }else{
           return {"InvalidEmail":true}
         }
       }],
       password: ['20606280', (control: FormControl)=>{
         if(InputVal.isString_LongerThan(4, control.value) && InputVal.isString_ShorterThan(200, control.value)){
           return null;
         }else{
           return {"InvalidPassword":true}
         }
       }]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N1Page');
  }

  logIn(){
    this.logInAttempt = true;
    const AlertP = this.AlertP;
    if(this.myForm.valid){
      let simpleL = AlertP.generateSimpleLoading(null);
      simpleL.present();
      this.Auth.logIn(this.myForm.controls.email.value, this.myForm.controls.password.value)
      .then((data)=>{
        simpleL.dismiss()
        .then(()=>{
          AlertP.generateSimpleAlert("Welcome Back", "Welcome Back Description")
          .then(()=>{
            console.log("LogIn Data: ",data);
          });
        });
      })
      .catch((err)=>{
        simpleL.dismiss();
        AlertP.generateSimpleAlert("Error Loggin In", err.error.text);
      });
    }
  }

  signUp(){
    this.navCtrl.push(N2Page);
  }

  forgotPassword(){
    const AlertP = this.AlertP;
    const SMP = this.SMP;
    const Auth = this.Auth;
    AlertP.generateSimpleInputAlert({
      title:"Input your Email Address"
      ,inputs:[{
        placeholder:"Email Address"
        ,type:"email"
      },{
        placeholder:"Confirm Email Address"
        ,type:"email"
      }]
    })
    .then((data)=>{
      if(data[0] === data[1]){
        let loading = AlertP.generateSimpleLoading("Sending Recovery Email...");
        loading.present();
        Auth.sendPasswordResetEmail(data[0])
        .then((data)=>{
          AlertP.generateSimpleAlert("Success", "A password recovery email has been sent to your inbox.");
          loading.dismiss();
        })
        .catch((err)=>{
          console.log("err: ",err);
          let text = "Error Found. Please try again later.";
          switch(err.where){
            case 0:
            case 1:
              text = SMP.getFirebaseErrorMessage(err.err).text;
            break;
          }
          AlertP.generateSimpleAlert("Error", text);
          loading.dismiss();
        });
      }else{
        AlertP.generateSimpleAlert("Error", "Emails don't match");
      }
    })
    .catch((err)=>{
      console.log("Err: ",err);
      AlertP.generateSimpleAlert("Error", "Error found. Please try again later.");
    });
  }

}
