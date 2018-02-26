import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {RequestOptions} from '@angular/http';
import {AddressesProvider} from "../addresses/addresses";
import 'rxjs/add/operator/map';

/*
  Generated class for the HttprequestServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttprequestServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HttprequestServiceProvider Provider');
  }

  call(callData){
    const http = this.http;
    return new Promise((accept, reject)=>{
      http.get((typeof callData.url === "string") ? callData.url : AddressesProvider.getBaseConnectionTestingURL())
      .subscribe((data)=>{
        var jsonO:any;
        try{
          var jsonO = data.json();
        }catch(e){
          jsonO = data;
        }
        if(jsonO.mock){
          //console.log("call JSON Mock detected...");
        }
        accept(jsonO);
      },(err)=>{
        reject(err);
      });
    });
  }

  call_parametrized(url:string, options:RequestOptions){
    const http = this.http;
    const simpleCall = this.call;
    url = (typeof url === "string") ? url : AddressesProvider.getBaseConnectionTestingURL();
    if(typeof options !== "object"){
      return simpleCall({url:url});
    }else{
      return new Promise((accept, reject)=>{
        http.get(url, options)
        .subscribe((data)=>{
          var jsonO;
          try{
            jsonO = data.json();
          }catch(e){
            console.log(e);
          }
          accept(jsonO);
        },(err)=>{
          reject(err);
        });
      });
    }
  }

}

export const getRequestRoutes = (where, which)=>{
  switch(!isNaN(where) ? where : -1){
    case 0: //Auth
      switch((!isNaN(which)) ? which : -1){
        case 0: //LogIn
          return AddressesProvider.getBaseLoginRequestURL();
        default:
        return AddressesProvider.getBaseAuthRequestURL();
      }
    case 1:
      switch((!isNaN(which)) ? which : -1){
        case 0: //LogIn
          return AddressesProvider.getGeoIpAddress();
        default:
        return AddressesProvider.getBaseAuthRequestURL();
      }
    default://Uknown Route
    return AddressesProvider.getBaseConnectionTestingURL();
  }
}
