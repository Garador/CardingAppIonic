import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {SettingsProvider} from "../../providers/settings/settings"
import {FormBuilder, FormControl} from "@angular/forms";
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {ProfileProvider} from "../../providers/profile/profile"
import {AlertProvider} from "../../providers/alert/alert"



/**
 * Generated class for the N3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n3',
  templateUrl: 'n3.html',
})
export class N3Page {

  settings:any;
  myForm:any;
  card_default_sharing = [];//Cards to be shareable.

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private AFA:AngularFireAuth,
    private SP:SettingsProvider,
    private formBuilder:FormBuilder,
    public InputVal:InputValidatorProvider,
    private ProfP:ProfileProvider,
    private ALP:AlertProvider) {
      let ctx = this;
      let loading = ctx.ALP.generateSimpleLoading("Loading Profile...");
      loading.present();
      this.loadSettings()
      .then((settingsData)=>{
        loading.dismiss();
        ctx.loadSharingCards();
        ctx.settings = settingsData;
        console.log("settingsData: ",settingsData);
        this.myForm = formBuilder.group({
           card_default_type: [ctx.settings.card_default_type, (control: FormControl)=>{
             if(control.value === 1 || control.value === 0){
               return null;
             }else{
               return {"InvalidNumber":true};
             }
           }],
           card_default_pass: [ctx.settings.card_default_pass, (control: FormControl)=>{
             if(InputVal.isString_ShorterThan(200, control.value)){
               return null;
             }else{
               return {"InvalidPassword":true}
             }
           }],
           card_default_sharing: [ctx.settings.card_default_sharing, (control: FormControl)=>{
             if(InputVal.isString_LongerThan(2, control.value) && InputVal.isString_ShorterThan(20, control.value)){
               return null;
             }else{
               return {"InvalidSharing":true}
             }
           }],
           help_messages: [ctx.settings.help_messages, (control: FormControl)=>{
             if(typeof control.value === "boolean"){
               return null;
             }else{
               return {"InvalidSharing":true}
             }
           }],
           notifications: [ctx.settings.notifications, (control: FormControl)=>{
             if(typeof control.value === "boolean"){
               return null;
             }else{
               return {"InvalidSharing":true}
             }
           }]
        });
      })
      .catch((err)=>{
        loading.dismiss();
        console.log("Err: ",err);
      });
      ctx.setDefaultForm();
  }

  setDefaultForm(){
    let ctx = this;
    this.myForm = ctx.formBuilder.group({
     card_default_type: [1, (control: FormControl)=>{
       if(control.value === 1 || control.value === 0){
         return null;
       }else{
         return {"InvalidNumber":true};
       }
     }],
     card_default_pass: ["", (control: FormControl)=>{
       if(ctx.InputVal.isString_ShorterThan(200, control.value)){
         return null;
       }else{
         return {"InvalidPassword":true}
       }
     }],
     card_default_sharing: ["", (control: FormControl)=>{
       if(ctx.InputVal.isString_LongerThan(2, control.value) && ctx.InputVal.isString_ShorterThan(20, control.value)){
         return null;
       }else{
         return {"InvalidSharing":true}
       }
     }],
     help_messages: [true, (control: FormControl)=>{
       if(typeof control.value === "boolean"){
         return null;
       }else{
         return {"InvalidSharing":true}
       }
     }],
     notifications: [true, (control: FormControl)=>{
       if(typeof control.value === "boolean"){
         return null;
       }else{
         return {"InvalidSharing":true}
       }
     }]
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N3Page');
  }

  logOut(){
    this.AFA.auth.signOut();
  }

  storeSettings(){
    //Store current settings.
  }

  loadSettings(){
    //Load settings
    let ctx = this;
    return ctx.SP.getSettings();
  }

  loadSharingCards(){
    //Loads the sharing cards and sets them on the form data.
    let ctx = this;
    ctx.ProfP.getUserOwnedCards(0,0, {
      _id:true
      ,_vn:true
    })
    .then((data:any)=>{
      console.log("Data: ",data);
      ctx.card_default_sharing = data;
    })
    .catch((err)=>{
      console.log("Error: ",err);
    });
  }

  saveSettings(){
    //Gets settings and uses storeSettings function to store them locally.
    let ctx = this;
    console.log("this.myForm: ",this.myForm);
    let loading = ctx.ALP.generateSimpleLoading("");
    loading.present();
    ctx.SP.storeSettings(this.myForm.value)
    .then((data)=>{
      console.log("Data: ",data);
      loading.dismiss();
    })
    .catch((err)=>{
      loading.dismiss();
      ctx.ALP.generateSimpleAlert("Error", "Error storing settings data. Please try again later.");
      console.log("Error: ",err);
    });
  }

}
