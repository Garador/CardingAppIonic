import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AlertController, LoadingController} from "ionic-angular";

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(private AlertC:AlertController, private LoadingC:LoadingController) {
    console.log('Hello AlertProvider Provider');
  }


  generateSimpleAlert(title, description){
    return new Promise((accept, reject)=>{
      let alert = this.AlertC.create({
        title:title
        ,subTitle:description
        ,buttons:[{
          text:"ok"
          ,handler:()=>{
            let dismiss = alert.dismiss()
            .then(()=>{
              accept();
            });
            return false;
          }
        }]
      });
      alert.present();
    });
  }

  generateSimpleLoading(content:any){
    let options = {content:""};
    if(typeof content === "string"){
      options.content = content;
    }
    let loading = this.LoadingC.create(options);
    return loading;
  }

  generateSimpleInputAlert(params){
    const AlertC = this.AlertC;
    return new Promise((accept, reject)=>{
      const alert = AlertC.create({
        title:params.title
        ,inputs:params.inputs
        ,buttons:[{
          text:"Cancel"
          ,role:"cancel"
        },{
          text:"Ok"
          ,handler:(results)=>{
            let dismiss = alert.dismiss();
            dismiss.then(()=>{
              accept(results);
            });
            return false;
          }
        }]
      });
      alert.present();
    });
  }

  generateMultipleButtonsAlert(params){
    const AlertC = this.AlertC;
    const alert = AlertC.create({
      title:params.title
      ,buttons:params.buttons
    });
    return alert;
  }


}
