import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfileProvider} from "../../providers/profile/profile"
import { AlertProvider } from "../../providers/alert/alert"
import {N15Page} from "../n15/n15"
/**
 * Generated class for the N8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-n8',
  templateUrl: 'n8.html',
})
export class N8Page {

  boundCards = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public PPR:ProfileProvider
  ,private ALP:AlertProvider) {
    this.getBoundCards();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N8Page');
  }


  getBoundCards(){
    const ctx = this;
    return new Promise((accept, reject)=>{
      let loading = ctx.ALP.generateSimpleLoading("Loading Cards...");
      loading.present();
      ctx.PPR.getUserBoundCards(0,0, {
        _id:true
        ,ctt:true
        ,na1:true
        ,eem:true
        ,_la:true
        ,ph1:true
        ,img_uri:true
      })
      .then((data:any)=>{
        loading.dismiss();
        console.log("Owned cards: ",data);
        if(data!=null && typeof data === "object" && !isNaN(data.length)){
          ctx.boundCards = data;
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

  viewCard(_id){
    this.navCtrl.push(N15Page, {_id:_id});
  }

  add(){  //Adds a Shared Card.
    let ctx = this;
    let alert = ctx.ALP.generateMultipleButtonsAlert({
      title:"Choose how you want to add your card"
      ,buttons:[{
        text:"Cancel"
        ,role:"cancel"
      },{
        text:"ID"
        ,handler:()=>{
          let dismiss = alert.dismiss();
          dismiss.then(()=>{
            ctx.ALP.generateSimpleInputAlert({
              title:"Insert your _id"
              ,inputs:[{
                placeholder:"ID"
                ,type:"text"
              }]
            })
            .then((data)=>{
              //console.log("Data: ",data[0]);
              let _cardID = data[0];
              ctx.PPR.bindToCard(_cardID, "")
              .then((data:any)=>{
                console.log("PPR.bindToCard data: ",data);
                if(!isNaN(data)){
                  if(data<1){
                    ctx.ALP.generateSimpleAlert("Error", "The card could not be found. Please check the code.")
                  }else{
                    ctx.ALP.generateSimpleAlert("Bound", "You have correctly added this card.")
                    ctx.getBoundCards();
                  }
                }else{
                  if(typeof data.err === "object"
                    && data.err.err != null
                    && typeof data.err.err === "object"
                    && !isNaN(data.err.err.where)){
                    if(data.err.err.where === 7){
                      ctx.ALP.generateSimpleInputAlert({
                        title:"Insert the card password"
                        ,inputs:[{
                          placeholder:"Passs"
                          ,type:"password"
                        }]
                      })
                      .then((data)=>{
                        ctx.PPR.bindToCard(_cardID, data[0])
                        .then((data:any)=>{
                          console.log("bindToCard with pass data: ",data);
                          if(!isNaN(data)){
                            if(data<1){
                              ctx.ALP.generateSimpleAlert("Error", "The card could not be found. Please check the code.")
                            }else{
                              ctx.ALP.generateSimpleAlert("Bound", "You have correctly added this card.")
                              ctx.getBoundCards();
                            }
                          }else{
                            if(typeof data.err === "object"
                              && data.err.err != null
                              && typeof data.err.err === "object"
                              && !isNaN(data.err.err.where)){
                              if(data.err.err.where === 4)
                              {
                                ctx.ALP.generateSimpleAlert("Error", "Invalid password.");
                              }else{
                                ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                              }
                            }else{
                              ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                            }
                            ctx.getBoundCards();
                          }
                        });
                      })
                      .catch((err)=>{
                        ctx.ALP.generateSimpleAlert("Error", "Error Gatering Password. Please try again later.");
                      });
                    }
                  }else{
                    ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                  }
                }
              })
              .catch((err)=>{
                console.log("PPR.bindToCard Err: ",err);
                ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
              });
            })
            .catch((err)=>{
              console.log("Error: ",err);
              ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
            });
          });
          return false;
        }
      }]
    });
    alert.present();
  }

  deleteCard(_id){
    let ctx = this;
    ctx.ALP.generateSimpleAlert("Remove", "Do you want to remove this card from your card box?")
    .then(()=>{
      ctx.PPR.unbindCard(_id)
      .then((data:any)=>{
        console.log("Data: ",data);
        if(!isNaN(data) && data==1){
          ctx.ALP.generateSimpleAlert("Done", "The card has been removed.");
          ctx.getBoundCards();
        }else{
          ctx.ALP.generateSimpleAlert("Error", "The card could not be removed. Please try again later.");
        }
      })
      .catch((err)=>{
        console.log("Error: ",err);
        ctx.ALP.generateSimpleAlert("Error", "The card could not be removed. Please try again later.");
      });
    })
    .catch(()=>{

    });
  }

}
