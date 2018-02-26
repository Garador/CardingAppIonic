import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SystemMessagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SystemMessagesProvider {

  constructor() {
    console.log('Hello SystemMessagesProvider Provider');
  }

  getFirebaseErrorMessages(){
    return {
      "auth/email-already-in-use":{
        text:"The email is already registered. Please try another email."
      },"default":{
        text:"An error has come up (1). Please try again later."
      },"auth/invalid-custom-token":{
        text:"The server has provided an invalid token. Please try again later."
      },"auth/wrong-password":{
        text:"The password is invalid. Please input your current password."
      },"auth/argument-error":{
        text:"Your inputs are invalid. Please check them again."
      }
    }
  }

  getFirebaseErrorMessage(firebaseError){
    const code = firebaseError.code;
    console.log("getFirebaseErrorMessage: ",firebaseError.code);
    let message = this.getFirebaseErrorMessages()[code];
    if(typeof message === "undefined"){
      message = this.getFirebaseErrorMessages()["default"];
    }
    return message;
  }

  getHTTPCallErrorMessages(){
    return {
      status:{
        "0":{
          text:"The server seems to be down. Please try again later."
        }
      }
    }
  }

  getHTTPCallErrorMessage(err){
    console.log("Err: ",err);
    let error = {text:"HTTP Call Error"};
    switch(err.status){
      case 0:
        error = this.getHTTPCallErrorMessages().status["0"];
      break;
    }
    return error;
  }


}
