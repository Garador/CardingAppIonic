import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Settings} from "../../settings"
import {Platform} from 'ionic-angular';

/*
  Generated class for the AddressesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddressesProvider {

  constructor(public http: Http) {
    console.log('Hello AddressesProvider Provider');
  }

  static getBaseRequestingURL(){
    let prod = Settings.isProd();
    return Settings.httpServerConfig(prod).url;
  }

  static getBaseConnectionTestingURL(){
    return AddressesProvider.getBaseRequestingURL()+"/test/http/main.js";
  }

  static getBaseLoginRequestURL(){
    return AddressesProvider.getBaseRequestingURL()+"/api/auth/logIn";
  }

  static getBaseAuthRequestURL(){
    return AddressesProvider.getBaseRequestingURL()+"/api/auth/logIn";
  }

  static getGeoIpAddress(){
    return "http://ip-api.com/json";
  }

}
