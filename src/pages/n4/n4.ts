import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertProvider} from "../../providers/alert/alert"
import {InputValidatorProvider}  from "../../providers/input-validator/input-validator";
import {AuthProvider} from "../../providers/auth/auth"
import {SystemMessagesProvider} from "../../providers/system-messages/system-messages"
import {ProfileProvider} from "../../providers/profile/profile";

/**
 * Generated class for the N4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n4',
  templateUrl: 'n4.html',
})
export class N4Page {
  public userView:{
    PPR_eml: ""
    ,PPR_dna:"DisplayName"
    ,PPR_emv:true
  };

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private AlertP:AlertProvider, private InputVP: InputValidatorProvider
    , private AuthP:AuthProvider, private SMP:SystemMessagesProvider
    , private ProfP:ProfileProvider, private _ngZone: NgZone) {
      this.loadProfile(false);
  }

  changeProfilePhoto(){
    let ctx = this;
    this.ProfP.updateProfilePhoto(true)
    .then((data)=>{
      console.log("Data from updateProfilePhoto: ",data);
      ctx.loadProfile(false)
      .then((data)=>{
      })
      .catch((err)=>{
        console.log("Error: ",err);
      });
    })
    .catch((err)=>{
      console.log("Error from updateProfilePhoto: ",err);
    });
  }

  loadProfile(recentAuth){
    console.log("loadProfile called       1");
    const ctx = this;
    let loading = ctx.AlertP.generateSimpleLoading("Loading Profile...");
    loading.present();
    return new Promise((accept, reject)=>{
      this.ProfP.getProfile(recentAuth)
      .then((data:any)=>{
        loading.dismiss();
        console.log("loadProfile called.        2   Data: ",data);
        ctx._ngZone.run(()=>{
          ctx.userView = data;
        });
        accept();
      })
      .catch((err)=>{
        loading.dismiss();
        console.log("loadProfile called.        3   Data: ",err);
        console.log(err);
        switch(err.where){
          case 0:
            if(err.refreshRequired){
              console.log("Calling Recursively...");
              ctx.loadProfile(recentAuth)
              .then((data)=>{
                accept();
              })
              .catch((err)=>{
                reject({where:1, err:err});
              });
            }
          break;
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N4Page');
  }

  changePassword(){
    const AlertP = this.AlertP;
    const InputVP = this.InputVP;
    const AuthP = this.AuthP;
    const SMP = this.SMP;
    AlertP.generateSimpleInputAlert({
      title:"Input your old and new password"
      ,inputs:[{
        placeholder:"Old Password"
        ,type:"password"
      },{
        placeholder:"New Password"
        ,type:"password"
      },{
        placeholder:"Repeat New Password"
        ,type:"password"
      }]
    })
    .then((data)=>{
      let valid = InputVP.isValid_password(data[0]) && InputVP.isValid_password(data[1]);
      valid = valid && (data[1] === data[2]);
      if(valid){
        let loading = AlertP.generateSimpleLoading("Changing password...");
        loading.present();
        AuthP.changePassword(data[0], data[1])
        .then((data)=>{
          loading.dismiss()
          .then(()=>{
            AlertP.generateSimpleAlert("Pasword Changed", "Your password has been changed");
          });
          console.log("Result from changePassword: ",data);
        })
        .catch((err)=>{
          let text = "";
          switch(err.where){
            case 1:
              text = err.text;
            break;
            case 2:
            case 3:
              text = SMP.getFirebaseErrorMessage(err.err).text;
            break;
          }
          loading.dismiss();
          AlertP.generateSimpleAlert("Error", text);
        });
      }else{
        AlertP.generateSimpleAlert("Error", "Your passwords are invalid. Please check them.");
      }
    })
    .catch((err)=>{
      console.log("Error: ",err);
    });
  }

  logOut(){
    this.AuthP.logOut();
  }

  editProfile(what){
    const ctx = this;
    let loading = ctx.AlertP.generateSimpleLoading({
      title:"Updating"
    });
    switch(what){
      case 1: //Edit Email
        ctx.AlertP.generateSimpleInputAlert({
          title:"Input your new Email"
          ,inputs:[{
            placeholder:"New Email"
            ,type:"email"
          }]
        })
        .then((data)=>{
          const newEmail = data[0];
          if(ctx.InputVP.isValid_Email(data[0])){
            loading.present();
            ctx.ProfP.updateProfile({
              email:newEmail
            })
            .then((data)=>{
              loading.dismiss();
              ctx.loadProfile(true);
            })
            .catch((err)=>{
              loading.dismiss();
              ctx.AlertP.generateSimpleAlert("Error", "An error has occured. Please try again later.");
            });
          }else{
            ctx.AlertP.generateSimpleAlert("Error", "The e-mail is invalid");
          }
        })
        .catch((err)=>{
          console.log(err);
          ctx.AlertP.generateSimpleAlert("Error", "There has been an error. Please try again later.");
        });
      break;
      case 2: //Edit DisplayName
        ctx.AlertP.generateSimpleInputAlert({
          title:"Input your new username"
          ,inputs:[{
            placeholder:"New Username"
            ,type:"text"
          }]
        })
        .then((data)=>{
          const newUsername = data[0];
          if(ctx.InputVP.isValid_Username(newUsername)){
            loading.present();
            ctx.ProfP.updateProfile({
              displayName:newUsername
            })
            .then((data)=>{
              loading.dismiss();
              ctx.loadProfile(true);
            })
            .catch((err)=>{
              console.log("Err: ",err);
              loading.dismiss();
              ctx.AlertP.generateSimpleAlert("Error", "An error has ocurred. Please try again later.");
            });
          }else{
            ctx.AlertP.generateSimpleAlert("Error", "The name is invalid");
          }
        })
        .catch((err)=>{
          console.log(err);
          ctx.AlertP.generateSimpleAlert("Error", "There has been an error. Please try again later.");
        });
      break;
    }
  }


}
