import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from "../../providers/profile/profile"
import {N12Page} from "../n12/n12"
import {N13Page} from "../n13/n13"
import {N14Page} from "../n14/n14"
import { AlertProvider } from "../../providers/alert/alert"
/**
 * Generated class for the N7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n7',
  templateUrl: 'n7.html',
})
export class N7Page {
  ownedCardsObj = [];

  constructor(public navCtrl: NavController
    ,public navParams: NavParams
    ,public PPR:ProfileProvider
    ,private ALP:AlertProvider) {
      this.getOwnedCards();

  }
  //1. Generate Cards Provider.
  //2. Get User Owned Cards.
  // 2.1 Get Fields: _id, data fields, _vn (to know when to update it)
  // 2.2 Store fields.
  //3. Display Owned Cards

  ionViewDidLoad() {
    console.log('ionViewDidLoad N7Page');
  }

  editCard(_id){
    this.navCtrl.push(N13Page, {_id:_id});
  }

  getOwnedCards(){
    const ctx = this;
    let loading = ctx.ALP.generateSimpleLoading("Loading Cards...");
    loading.present();
    return new Promise((accept, reject)=>{
      ctx.PPR.getUserOwnedCards(0,0, {
        _id:true
        ,ctt:true
        ,na1:true
        ,eem:true
        ,_la:true
        ,ph1:true
        ,vis:true
        ,img_uri:true
      })
      .then((data:any)=>{
        loading.dismiss();
        console.log("Owned cards: ",data);
        if(data!=null && typeof data === "object" && !isNaN(data.length)){
          ctx.ownedCardsObj = data;
        }else{
          ctx.ALP.generateSimpleAlert("Error", "Error getting your cards. Please try again later.")
        }
      })
      .catch((err)=>{
        loading.dismiss();
        console.log("Error gotten: ",err);
      });
    });
  }

  add(){
    this.navCtrl.push(N12Page);
  }

  deleteCard(_id){
    let ctx = this;
    ctx.ALP.generateSimpleInputAlert({
      title:"Delete card "+_id+"?"
    })
    .then((data)=>{
      let loading = ctx.ALP.generateSimpleLoading("Deleting...");
      ctx.PPR.deleteUserOwnedCard(_id)
      .then((data:any)=>{
        loading.dismiss();
        console.log("Data: ",data);
        if(!isNaN(data) && data==1){
          ctx.ALP.generateSimpleAlert("Done", "The card has been deleted.");
          ctx.getOwnedCards();
        }else{
          ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
        }
      })
      .catch((err)=>{
        loading.dismiss();
        console.log("Error: ",err);
        ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
      });
    })
    .catch((err)=>{
      console.log("Err: ",err);
      ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
    });
  }

  shareCard(_id, vis){
    this.navCtrl.push(N14Page, {_id:_id, vis:vis});
  }

}
