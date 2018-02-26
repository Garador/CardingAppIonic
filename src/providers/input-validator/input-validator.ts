import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InputValidatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class InputValidatorProvider {
  regExp_email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  regExp_username = new RegExp(/^[a-zA-Z0-9]+$/);
  regExp_name = new RegExp(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
  regExp_photoURL = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/); //For Firebase type of files.


  constructor(public http: Http) {
    console.log('Hello InputValidatorProvider Provider');
  }

  validateEmail(possibleEmail){
    
  }

  scapeString(string){
    //https://codereview.stackexchange.com/questions/153691/escape-user-input-for-use-in-js-regex
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  isString_ShorterThan(maxLength, string){
    const regEx = "^.{0,"+maxLength+"}$";
    return (new RegExp(regEx)).test(string);
  }

  isString_LongerThan(minLength, string){
    const regEx = "^.{"+minLength+",}$";
    return (new RegExp(regEx)).test(string);
  }

  isValid_Email(email){
    return this.regExp_email.test(email);
  }

  isValid_Username(username){
    return this.regExp_username.test(username);
  }

  isValid_Name(name){
    return this.regExp_name.test(name);
  }

  isValid_password(value){
    return this.isString_LongerThan(4, value) && this.isString_ShorterThan(200, value);
  }

  sanitize_string(string){

  }

  isValid_uri(string){
    return this.regExp_photoURL.test(string);
  }

}
