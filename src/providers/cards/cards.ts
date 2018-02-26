import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Camera } from '@ionic-native/camera';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the CardsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CardsProvider {

  constructor(private CMR:Camera, private AFA:AngularFireAuth) {
    console.log('Hello CardsProvider Provider');
  }


  updateCardImage(imageData, cardData:any){
    //Upload an image to Firebase Storage bucket
    //and updates references.
    let ctx = this;
    return new Promise((accept, reject)=>{
      let uid = null;
      if(ctx.AFA.auth.currentUser!=null){
        uid = ctx.AFA.auth.currentUser.uid;
      }else{
        reject({where:4, text:"User is not logged in..."});
      }
      let ref = firebase.storage().ref("images/cards/main/"+cardData.CRD__id+"");
      ref.putString(imageData, 'base64', { contentType: 'image/png' })
      .then((savedPicture)=>{
        //Update the personal data.
         accept(savedPicture.downloadURL);
      })
      .catch((err)=>{
        reject({where:2, err:err});
      });
    });
  }

  getImageData(){
    //Upload an image to Firebase Storage bucket
    //and updates references.
    let options = {
        quality : 100,
        destinationType : this.CMR.DestinationType.DATA_URL,
        sourceType : this.CMR.PictureSourceType.PHOTOLIBRARY,
        allowEdit : true,
        targetWidth: 890,
        targetHeight: 510
    };
    let ctx = this;
    return new Promise((accept, reject)=>{
      ctx.CMR.getPicture(options).then((imageData) => {
       accept(imageData);
      }, (err) => {
       reject({where:3, err:err});
      });
    });
  }

}
