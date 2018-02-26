import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttprequestServiceProvider, getRequestRoutes} from "../httprequest-service/httprequest-service"
import {LocalStorageWorker} from "../localstorageworker/localstorage";
import {SystemMessagesProvider} from "../system-messages/system-messages";
import {AlertProvider} from "../alert/alert";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public AuthP: AngularFireAuth,
    private httpCaller:HttprequestServiceProvider,
    private LStorage:LocalStorageWorker,
    private SMP:SystemMessagesProvider,
    private ALP:AlertProvider) {
    console.log('Hello AuthProvider Provider');
  }

  isLoggedIn(){
    var AuthP = this.AuthP;
    return new Promise((accept, reject)=>{
      const authObserver = AuthP.authState.subscribe(user=>{
        if(user){
          authObserver.unsubscribe();
          accept(user);
        }else{
          authObserver.unsubscribe();
          accept(null);
        }
      });
    });
  }

  logIn(email, password){
    const AuthP = this.AuthP;
    //0. Check Email and Password are correct.
    //1. LogIn to Firebase Auth. Service and get IDToken.
    //2. Get custom Auth. token from ExtremeCards server.
    //3. LogIn with that token.
    const httpCaller = this.httpCaller;
    const LStorage = this.LStorage;
    const SMP = this.SMP;
    return new Promise((accept, reject)=>{
      //TODO Step 0
      AuthP.auth  //1
      .signInWithEmailAndPassword(email, password)
      .then((data)=>{
        data.getIdToken(true)
        .then((idToken:string)=>{
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', 'IDT '+idToken);
          headers.append('APIKey', "MYAPIKEY");
          let options = new RequestOptions({ headers: headers });
          httpCaller.call_parametrized(getRequestRoutes(0, 0), options)
          .then((response:{mock:boolean, TKN:string})=>{
            if(!response.mock){
              AuthP.auth.signInWithCustomToken(response.TKN)
              .then((firebaseUserObj)=>{
                LStorage.storeSession(firebaseUserObj)
                .then(()=>{
                  accept(firebaseUserObj);
                })
                .catch((err)=>{
                  reject({code:6, error:{text:"Error storing the current session."}});
                });
              })
              .catch((err)=>{
                reject({code:5, error:SMP.getFirebaseErrorMessage(err)});
              });
            }else{
              reject({code:4, error:{text:"The response from server is a mock."}});
            }
          })
          .catch((err)=>{
            //TODO Get the Auth. Errors.
            reject({code:3, error:SMP.getHTTPCallErrorMessage(err)});
          });
        })
        .catch((err)=>{
          reject({code:2, error:SMP.getFirebaseErrorMessage(err)});
        });
      })
      .catch((err)=>{
        //Get the Firebase Error message.
        reject({code:1, error:SMP.getFirebaseErrorMessage(err)});
      });
    });
  }

  logOut(){
    const AuthP = this.AuthP;
    return new Promise((accept, reject)=>{
      try{
        AuthP.auth.signOut();
        accept();
      }catch(e){
        reject(e);
      }
    });
  }

  signUp(email, password){
    const AuthP = this.AuthP;
    const SMP = this.SMP;
    return new Promise((accept, reject)=>{
      AuthP.auth.createUserWithEmailAndPassword(email, password)
      .then((newUser)=>{
        newUser.sendEmailVerification();
        AuthP.auth.signOut();
        accept({emailSent:true});
      })
      .catch((err)=>{
        //TODO Get Firebas error and return it.
        reject(SMP.getFirebaseErrorMessage(err));
      });
    });
  }

  reAuthenticate_emailAndPassword_1(email, password){ //ReAuthenticates without pop-up.
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.AuthP.auth.onAuthStateChanged((user)=>{
        if(user){
          let credentials = firebase.auth.EmailAuthProvider.credential(email, password);
          user.reauthenticateWithCredential(credentials)
          .then(()=>{
            accept();
          })
          .catch((err)=>{
            reject({where:2, err:err});
          });
        }else{
          reject({where:1, text:"reAuthenticate_emailAndPassword_1: User is not logged in"});
        }
      });
    });
  }

  reAuthenticate_emailAndPassword_0(){  //Shows an input form to re-authenticate.
    let ctx = this;
    return new Promise((accept, reject)=>{
      ctx.ALP.generateSimpleInputAlert({
        title:"Re-Authentication Required."
        ,inputs:[{
          placeholder:"Password"
          ,type:"password"
        }]
      })
      .then((passw)=>{
        ctx.AuthP.auth.onAuthStateChanged((user)=>{
          if(user){
            ctx.reAuthenticate_emailAndPassword_1(user.email, passw[0])
            .then((data)=>{
              accept();
            })
            .catch((err)=>{
              reject({where:1, err:err});
            });
          }else{
            reject({where:0, text:"The user is not logged-in."});
          }
        });
      })
      .catch((err)=>{
        reject({where:0, err:err});
      });
    });
  }

  changePassword(oldPassword, newPassword){
    const ctx = this;
    return new Promise((accept, reject)=>{
      ctx.AuthP.auth.onAuthStateChanged((user)=>{
        if(user){
          ctx.reAuthenticate_emailAndPassword_1(user.email, oldPassword)
          .then((data)=>{
            ctx.AuthP.auth.currentUser.updatePassword(newPassword)
            .then((data)=>{
              accept(data);
            })
            .catch((err)=>{
              reject({where:3, err:err});
            });
          })
          .catch((err)=>{
            reject({where:2, err:err});
          });
        }else{
          reject({where:1, text:"changePassword: User is not logged in"});
        }
      });
    });
  }

  sendPasswordResetEmail(email){
    const AuthP = this.AuthP;
    return new Promise((accept, reject)=>{
      console.log("sendPasswordResetEmail       1");
      try{
        AuthP.auth.sendPasswordResetEmail(email)
        .then((data)=>{
          console.log("sendPasswordResetEmail       2");
          accept(data);
        })
        .catch((err)=>{
          console.log("sendPasswordResetEmail       3");
          reject({where:1, err:err});
        });
      }catch(e){
        reject({where:0, err:e});
      }
    });
  }


}
