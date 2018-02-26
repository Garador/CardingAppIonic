import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {LocationProvider} from "../../providers/location/location"
import { AlertProvider } from "../../providers/alert/alert"
import { ProfileProvider } from "../../providers/profile/profile"
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {FormBuilder, FormControl} from "@angular/forms";
import {CardsProvider} from "../../providers/cards/cards"


declare var google;
@IonicPage()
@Component({
  selector: 'page-n13',
  templateUrl: 'n13.html',
})
export class N13Page {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  marker:any;
  myForm:any;
  _id:string;
  mapLoaded = false;

  card = {
    vis:1 //Visibility. //0: Private. 1: Public.
    ,na1:"Namey mcNamero"   //Name
    ,eem:"anemail@aprovider.com"   //Electronic Email Address.
    ,pob:"asdasd asd asdasd asd"   //PO-Box Address.
    ,ph1:"256655854"   //Phone Number #1
    ,ph2:"256664487"   //Phone Number #1
    ,adr:"akldj ajsd ajsdkljaskldjaklsjdklajd"   //Address (text)
    ,a_lon:""   //Longitude
    ,a_lat:""   //Latitude
    ,twt:"s5d4s5d4"   //Twitter Username
    ,int:"a5sd4a5d" //Instagram Update.
    ,pin:"a5s4da5s" //Pinterest Username.
    ,gpu:"s5d4as54" //Google+ Username.
    ,img_uri:""
  };

  originalCard:any;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private LocP:LocationProvider
    , private ALP:AlertProvider
    , private PPR:ProfileProvider
    , private formBuilder:FormBuilder
    , private CardsP:CardsProvider
    , private InputVal:InputValidatorProvider) {
      this.card = {
        vis:1 //Visibility. //0: Private. 1: Public.
        ,na1:""   //Name
        ,eem:""   //Electronic Email Address.
        ,pob:""   //PO-Box Address.
        ,ph1:""   //Phone Number #1
        ,ph2:""   //Phone Number #1
        ,adr:""   //Address (text)
        ,a_lon:""   //Longitude
        ,a_lat:""   //Latitude
        ,twt:""   //Twitter Username
        ,int:"" //Instagram Update.
        ,pin:"" //Pinterest Username.
        ,gpu:"" //Google+ Username.
        ,img_uri:""
      };
      let ctx = this;
      ctx.setForm(ctx.card);
      ctx.loadCard();
  }


  switchVisibility(){
    this.card.vis = (this.card.vis === 1) ? 0 : 1;
  }

  setForm(formData){
    const ctx = this;
    this.myForm = ctx.formBuilder.group({
       na1: [formData.na1, (control: FormControl)=>{
         return (ctx.InputVal.isString_ShorterThan(120,control.value)) ? null : {text:"Invalid Name"};
       }],
       eem: [formData.eem, (control: FormControl)=>{
         return (ctx.InputVal.isValid_Email(control.value)) ? null : {text:"Invalid Email"};
       }],
       pob: [formData.pob, (control: FormControl)=>{
         return (ctx.InputVal.isString_ShorterThan(240,control.value)) ? null : {text:"Invalid PO-Box Address"};
       }],
       ph1: [formData.ph1, (control: FormControl)=>{
         let isValid = !isNaN(control.value);
         isValid = isValid && ctx.InputVal.isString_ShorterThan(15,control.value+"");
         return (isValid) ? null : {text:"Invalid Phone 1"};
       }],
       ph2: [formData.ph2, (control: FormControl)=>{
         let isValid = !isNaN(control.value);
         isValid = isValid && ctx.InputVal.isString_ShorterThan(15,control.value+"");
         return (isValid) ? null : {text:"Invalid Phone 2"};
       }],
       ctt: [formData.ctt, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(30, control.value);
         return (isValid) ? null : {text:"Invalid Address"};
       }],
       adr: [formData.adr, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(300, control.value);
         return (isValid) ? null : {text:"Invalid Address"};
       }],
       twt: [formData.twt, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(51,control.value);
         return (isValid) ? null : {text:"Invalid Tweeter Username"};
       }],
       int: [formData.int, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(31,control.value);
         return (isValid) ? null : {text:"Invalid Instagram Username"};
       }],
       pin: [formData.pin, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(16,control.value);
         return (isValid) ? null : {text:"Invalid Pinterest Username"};
       }],
       gpu: [formData.gpu, (control: FormControl)=>{
         let isValid = typeof control.value === "string";
         isValid = isValid && ctx.InputVal.isString_ShorterThan(65,control.value);
         return (isValid) ? null : {text:"Invalid Google+ Username"};
       }]
    });
    if(this.map){
      if(!isNaN(formData.a_lat) && !isNaN(formData.a_lon)){
        ctx.map.setCenter(new google.maps.LatLng(formData.a_lat, formData.a_lon));
        ctx.setPin();
      }
    }
  }

  loadCard(){
    let ctx = this;
    ctx._id = this.navParams.get('_id');
    console.log("Loading card with _id: ",ctx._id);
    ctx.PPR.getUserOwnedCard(ctx._id, {
      na1:true
      ,eem:true
      ,ctt:true
      ,pob:true
      ,ph1:true
      ,ph2:true
      ,adr:true
      ,a_lon:true
      ,a_lat:true
      ,twt:true
      ,int:true
      ,pin:true
      ,gpu:true
      ,vis:true
      ,img_uri:true
    })
    .then((data:any)=>{
      console.log("Data result: ",data);
      if(data.length>0){
        //CRD_
        for(let index in data[0]){
          ctx.card[index.replace("CRD_", "")] = data[0][index];
        }
        ctx.originalCard = JSON.parse(JSON.stringify(ctx.card));
        ctx.setForm(ctx.card);
      }else{
        ctx.ALP.generateSimpleAlert("Error", "This card could not be loaded. Please try again later.")
      }
      //Set the card data to ctx.card
    })
    .catch((err)=>{
      console.log("Error result: ",err);
    });
  }

  loadMap(){
    let ctx = this;
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    ctx.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //ctx.setPin();
    ctx.mapLoaded = true;
  }

  ionViewDidLoad() {
    this.loadMap();
    this.setForm(this.card);
  }

  setPin(){
    //Sets the pin position to the center of the map.
    if(typeof this.marker !== "undefined"){
      this.marker.setPosition(this.map.getCenter());
    }else{
      this.marker = new google.maps.Marker({
        position: this.map.getCenter(),
        map: this.map,
        draggable: true,
        title: 'Your Position'
      });
    }
  }

  locateSelf(){
    //Get our current position AND set the map center to it
    let isOnChrome = true;
    let ctx = this;
    this.LocP.getCurrentPosition()
    .then((data:any) => {
      let mapPos = new google.maps.LatLng(data.data.coords.latitude, data.data.coords.longitude);
      ctx.map.setCenter(mapPos);
      if(data.coarse){
        ctx.map.setZoom(10);
      }
    })
    .catch((err) =>{
      ctx.ALP.generateSimpleAlert("Error","There has been an error locating you.");
    })
  }

  storeCard(cardPayload){
    let ctx= this;
    return new Promise((accept, reject)=>{
      let postPayload = {};
      for(let index in cardPayload){
        if(typeof cardPayload[index] != null){
          postPayload[index] = {
            value:cardPayload[index]
            ,set:true
          };
        }
      }
      if(ctx.card.vis == 0 && ctx.originalCard.vis == 1){  //New Private Card: Ask for code.
        ctx.ALP.generateSimpleInputAlert({
          title:"Input the card password"
          ,inputs:[{
            placeholder:"Card Code"
            ,type:"password"
          },{
            placeholder:"Confirm Card Code"
            ,type:"password"
          }]
        })
        .then((data)=>{
          if(data[0].length>0 && data[1].length>0){
            if(data[0] === data[1]){
              postPayload["cde"] = {
                set:true,
                value:data[0]
              }
              ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
              .then((data)=>{
                accept(data);
              })
              .catch((err)=>{
                reject({where:0, err:err});
              });
            }else{
              ctx.ALP.generateSimpleAlert("Error", "Codes do not match")
              reject({where:0, text:"Codes do not match"});
            }
          }else{
            //Confirm the card is going to be public and change it.
            ctx.ALP.generateSimpleAlert("Confirm public", "This card is going to be public. Do you want to create it?")
            .then((data)=>{
              ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
              .then((data)=>{
                console.log("updateUserOwnedCard 2: ",data);
                accept(data);
              })
              .catch((err)=>{
                reject({where:0, err:err});
              });
            })
            .catch((err)=>{
              reject({where:0, err:err});
            });
          }
        })
        .catch((err)=>{
          reject({where:0, err:err});
        });
      }else{  //Public card: No code provided or a card with an already existing code.
        ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
        .then((data)=>{
          console.log("updateUserOwnedCard 3: ",data);
          accept(data);
        })
        .catch((err)=>{
          reject({where:0, err:err});
        });
      }
    });
  }

  getImage(){
    let ctx = this;
    ctx.CardsP.getImageData()
    .then((data:any)=>{
      console.log("Data: ",data);
      ctx.card.img_uri = data;
    })
    .catch((err)=>{
      console.log("Error: ",err);
      ctx.card.img_uri = "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";
    });
  }

  updateCard(){
    let ctx = this;
    if(ctx.myForm.valid){
      /*Get the data*/
      if(typeof ctx.marker !== "undefined"){
        ctx.card.a_lat = ctx.marker.getPosition().lat();
        ctx.card.a_lon = ctx.marker.getPosition().lng();
      }
      for(let index in ctx.myForm.value){
        ctx.card[index] = ctx.myForm.value[index];
      }

      let loading = ctx.ALP.generateSimpleLoading("Updating...");
      loading.present();
      if(JSON.stringify(ctx.originalCard) !== JSON.stringify(ctx.card)){
        if(ctx.originalCard.img_uri !== ctx.card.img_uri){
          //Update Image.
          console.log("Need to update image.");
          let CRD_id = ctx._id;
          ctx.CardsP.updateCardImage(ctx.card.img_uri, {
            CRD__id: CRD_id
          })
          .then((pictureURL:string)=>{
            ctx.card.img_uri = pictureURL;
            console.log("CRD_id: ",CRD_id);
            let _upPayload = {};
            for(let index in ctx.card){
              _upPayload[index] = {
                set:true,
                value:ctx.card[index]
              };
            }
            ctx.PPR.updateUserOwnedCard(_upPayload, CRD_id)
            .then((data)=>{
              loading.dismiss();
              console.log("updateUserOwnedCard data: ",data);
              ctx.ALP.generateSimpleAlert("Success", "The card has been updated successfully.");
              ctx.loadCard();
            })
            .catch((err)=>{
              loading.dismiss();
              console.log("Err: ",err);
              ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image. Please try again later.");
            });
          })
          .catch((err)=>{
            loading.dismiss();
            console.log(err);
            ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image (1). Please try again later.");
          });
        }else{
          ctx.storeCard(ctx.card)
          .then((data:any)=>{
            loading.dismiss();
            console.log("Result from updating card: ",data);
            if(typeof data === "object" && !isNaN(data.CRD__vn)){
              ctx.ALP.generateSimpleAlert("Success", "The card has been updated successfully.");
            }else{
              ctx.ALP.generateSimpleAlert("Error", "There has been an error updating the card (2). Please try again later.");
            }
            ctx.loadCard();
          })
          .catch((err)=>{
            loading.dismiss();
            ctx.ALP.generateSimpleAlert("Error", "There has been an error updating the card (1). Please try again later.");
            console.log("Error from updating data: ",err);
          });
        }
      }else{
        console.log("Nothing to update...");
      }
    }
  }


}
