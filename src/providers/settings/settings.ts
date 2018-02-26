import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LocalStorageWorker } from "../localstorageworker/localstorage"


/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  constructor(private LocalSW:LocalStorageWorker) {
    console.log('Hello SettingsProvider Provider');
  }

  getDefaultSettings(){
    let def = {
      notifications:false
      ,help_messages:false
      ,card_default_sharing:null
      ,card_default_type:0
      ,card_default_pass:null
    };
    return JSON.stringify(def);
  }

  generateDefaultSettings(){
    let ctx = this;
    return new Promise((accept, reject)=>{
      let defSettings = ctx.getDefaultSettings();
      ctx.storeSettings(defSettings)
      .then((data)=>{
        accept(data);
      })
      .catch((err)=>{
        reject(err);
      });
    });
  }

  getSettings(){
    let ctx = this;
    console.log("getSettings  1");
    return new Promise((accept, reject)=>{
      console.log("getSettings  2");
      ctx.LocalSW.getValue("settings")
      .then((data:any)=>{
        console.log("getSettings  3");
        try{
          if(typeof data === "string"){
            try{
              console.log("getSettings  4");
              let settings = JSON.parse(data);
              accept(settings);
            }catch(e){
              console.log("getSettings  5");
              ctx.generateDefaultSettings()
              .then((data)=>{
                accept(data);
              })
              .catch((err)=>{
                reject(err);
              });
            }
          }else{
            console.log("getSettings  6");
            ctx.generateDefaultSettings()
            .then((data)=>{
              accept(data);
            })
            .catch((err)=>{
              reject(err);
            });
          }
        }catch(e){
          console.log("getSettings  7");
          ctx.generateDefaultSettings()
          .then((data)=>{
            accept(data);
          })
          .catch((err)=>{
            reject(err);
          });
        }
      })
      .catch((err)=>{
        console.log("getSettings  8");
        ctx.generateDefaultSettings()
        .then((data)=>{
          accept(data);
        })
        .catch((err)=>{
          reject(err);
        });
      });
    });
  }

  storeSettings(settings){
    let ctx = this;
    return new Promise((accept, reject)=>{
      if(typeof settings === "string"){
        ctx.LocalSW.storeValue("settings", settings);
        accept();
      }else{
        try{
          settings = JSON.stringify(settings);
          ctx.LocalSW.storeValue("settings", settings);
          accept();
        }catch(e){
          reject({where:1, where2:"storeSettings", err:e});
        }
      }
    });
  }

}
