import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {LocationProvider} from "../../providers/location/location"
import { AlertProvider } from "../../providers/alert/alert"
import { ProfileProvider } from "../../providers/profile/profile"
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {CardsProvider} from "../../providers/cards/cards"
import {SettingsProvider} from "../../providers/settings/settings"
import {FormBuilder, FormControl} from "@angular/forms";


/**
 * Generated class for the N12Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-n12',
  templateUrl: 'n12.html',
})
export class N12Page {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  marker:any;
  myForm:any;
  defPassword:string;
  defType:number;

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

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private LocP:LocationProvider
    , private ALP:AlertProvider
    , private PPR:ProfileProvider
    , private formBuilder:FormBuilder
    , private InputVal:InputValidatorProvider
    , private CardsP: CardsProvider
    , private SettsP: SettingsProvider) {
      this.loadDefSettings();
      this.card = {
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
      let ctx = this;
      this.myForm = formBuilder.group({
         na1: ['Namey McNamero', (control: FormControl)=>{
           return (ctx.InputVal.isString_ShorterThan(120,control.value)) ? null : {text:"Invalid Name"};
         }],
         eem: ['eem1@provider.com', (control: FormControl)=>{
           return (ctx.InputVal.isValid_Email(control.value)) ? null : {text:"Invalid Email"};
         }],
         pob: ['alskdj aklsdj aklsdjlaksjdlkajsd', (control: FormControl)=>{
           return (ctx.InputVal.isString_ShorterThan(240,control.value)) ? null : {text:"Invalid PO-Box Address"};
         }],
         ph1: ['585556648', (control: FormControl)=>{
           let isValid = !isNaN(control.value);
           isValid = isValid && ctx.InputVal.isString_ShorterThan(15,control.value+"");
           return (isValid) ? null : {text:"Invalid Phone 1"};
         }],
         ph2: ['585556649', (control: FormControl)=>{
           let isValid = !isNaN(control.value);
           isValid = isValid && ctx.InputVal.isString_ShorterThan(15,control.value+"");
           return (isValid) ? null : {text:"Invalid Phone 2"};
         }],
         ctt: ['My New Title', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(30, control.value);
           return (isValid) ? null : {text:"Invalid Address"};
         }],
         adr: ['65a1d a6sd1 a6sd1a651d6a51sd', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(300, control.value);
           return (isValid) ? null : {text:"Invalid Address"};
         }],
         twt: ['a6s51d', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(51,control.value);
           return (isValid) ? null : {text:"Invalid Tweeter Username"};
         }],
         int: ['a6s5d1', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(31,control.value);
           return (isValid) ? null : {text:"Invalid Instagram Username"};
         }],
         pin: ['a6s51d', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(16,control.value);
           return (isValid) ? null : {text:"Invalid Pinterest Username"};
         }],
         gpu: ['adasdd', (control: FormControl)=>{
           let isValid = typeof control.value === "string";
           isValid = isValid && ctx.InputVal.isString_ShorterThan(65,control.value);
           return (isValid) ? null : {text:"Invalid Google+ Username"};
         }]
      });
  }

  loadDefSettings(){
    //Loads defPassword.
    let ctx = this;
    ctx.SettsP.getSettings()
    .then((data:any)=>{
      ctx.defPassword = data.card_default_pass;
      ctx.defType = (typeof data.card_default_type === "string" && !isNaN(parseInt(data.card_default_type))) ? parseInt(data.card_default_type) : 1;
      ctx.card.vis = ctx.defType;
    })
    .catch((err)=>{
      console.log("Error: ",err);
    });
  }

  switchVisibility(){
    this.card.vis = (this.card.vis === 1) ? 0 : 1;
  }

  loadMap(){
    let ctx = this;
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    ctx.setPin();
  }

  ionViewDidLoad() {
    this.loadMap();
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
      console.log("cardPayload to store: ",cardPayload);
      if(ctx.card.vis == 0){  //Private Card: Ask for code.
        ctx.ALP.generateSimpleInputAlert({
          title:"Input the card password"
          ,inputs:[{
            placeholder:"Card Code"
            ,type:"password"
            ,value:ctx.defPassword
          },{
            placeholder:"Confirm Card Code"
            ,type:"password"
            ,value:ctx.defPassword
          }]
        })
        .then((data)=>{
          if(data[0].length>0 && data[1].length>0){
            if(data[0] === data[1]){
              postPayload["cde"] = {
                set:true,
                value:data[0]
              }
              ctx.PPR.createUserCard(postPayload)
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
            ctx.ALP.generateSimpleAlert("Confirm public creation", "This card is going to be public. Do you want to create it?")
            .then((data)=>{
              ctx.PPR.createUserCard(postPayload)
              .then((data)=>{
                console.log("createUserCard 2: ",data);
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
      }else{  //Public card: No code provided.
        ctx.PPR.createUserCard(postPayload)
        .then((data)=>{
          console.log("createUserCard 3: ",data);
          accept(data);
        })
        .catch((err)=>{
          reject({where:0, err:err});
        });
      }
    });
  }

  createCard(){
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

      ctx.storeCard(ctx.card)
      .then((data:any)=>{
        if(data != null && typeof data === "object" && data.CRD__id){
          //ctx.ALP.generateSimpleAlert("Created", "Your card ID "+data.CRD__id+" has been created");
          //Update Image.
          if(ctx.card.img_uri.length>100){
            //data.CRD__id
            ctx.CardsP.updateCardImage(ctx.card.img_uri, {
              CRD__id: data.CRD__id
            })
            .then((pictureURL:string)=>{
              ctx.card.img_uri = pictureURL;
              console.log("data.CRD__id: ",data.CRD__id);
              let _upPayload = {};
              for(let index in ctx.card){
                _upPayload[index] = {
                  set:true,
                  value:ctx.card[index]
                };
              }
              ctx.PPR.updateUserOwnedCard(_upPayload, data.CRD__id)
              .then((data)=>{
                console.log("updateUserOwnedCard data: ",data);
                ctx.ALP.generateSimpleAlert("Success", "The card has been created successfully.");
                ctx.navCtrl.goToRoot({});
              })
              .catch((err)=>{
                console.log("Err: ",err);
                ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image. Please try again later.");
              });
            })
            .catch((err)=>{
              console.log(err);
              ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image (1). Please try again later.");
            });
          }else{
            ctx.ALP.generateSimpleAlert("Success", "The card has been created successfully.");
            ctx.navCtrl.goToRoot({});
          }
        }else{
          ctx.ALP.generateSimpleAlert("Error", "There has been an error creating the card. Please try again later.");
        }
      })
      .catch((err)=>{
        console.log("Error from storing card: ",err);
      });
    }
  }


}
