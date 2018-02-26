import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {HttprequestServiceProvider, getRequestRoutes} from "../httprequest-service/httprequest-service";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationProvider {

  constructor(public http: Http
    ,private geolocation: Geolocation
    ,private HTTP_SP:HttprequestServiceProvider) {
    console.log('Hello LocationProvider Provider');
  }

  getCurrentLocation_http(){
    //Gets a coarse location from an HTTP call.
    let ctx = this;
    return new Promise((accept, reject)=>{
      console.log("getCurrentLocation_http 1---");
      ctx.HTTP_SP.call({
        url:getRequestRoutes(1, 0)
      })
      .then((data:any)=>{
        console.log("getCurrentLocation_http 2 ---",data);
        if(data.status === "success"){
          accept({
            coords:{
              latitude:data.lat
              ,longitude:data.lon
            }
          });
        }else{
          reject({where:1, text:"Error on request: not successfull."});
        }
      })
      .catch((err)=>{
        console.log("getCurrentLocation_http 3---",err);
        reject({where:2, err:err});
      });
    });

  }

  getCurrentPosition(){
    let position = {
      coords:{
        latitude:-34.9290
        ,longitude:138.6010
      }
    };
    let ctx = this;
    return new Promise((accept, reject)=>{
      ctx.geolocation.getCurrentPosition()
      .then((position:any)=>{
        console.log("getCurrentPosition 1: ",position);
        accept({coarse:false,data:position});
      })
      .catch((err)=>{
        console.log("getCurrentPosition 2: ",err);
        ctx.getCurrentLocation_http()
        .then((data:any)=>{
          console.log("getCurrentPosition 3: ",data);
          position.coords = data.coords;
          accept({coarse:true,data:position});
        })
        .catch((err)=>{
          console.log("getCurrentPosition 4: ",err);
          reject({where:1, err:err});
        });
      });
    });
  }

}
