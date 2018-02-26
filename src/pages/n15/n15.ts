import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {LocationProvider} from "../../providers/location/location"
import { AlertProvider } from "../../providers/alert/alert"
import { ProfileProvider } from "../../providers/profile/profile"
import {InputValidatorProvider} from "../../providers/input-validator/input-validator"
import {FormBuilder, FormControl} from "@angular/forms";


declare var google;
@IonicPage()
@Component({
  selector: 'page-n15',
  templateUrl: 'n15.html',
})
export class N15Page {
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
    ,img_uri:null
  };

  originalCard:any;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private LocP:LocationProvider
    , private ALP:AlertProvider
    , private PPR:ProfileProvider
    , private formBuilder:FormBuilder
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
        ,img_uri:null
      };
      let ctx = this;
      ctx.setForm(ctx.card);
      ctx.loadCard();
  }


  switchVisibility(){
    //this.card.vis = (this.card.vis === 1) ? 0 : 1;
  }

  setForm(formData){
    console.log("setForm formData: ",formData);
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
    }else{
      let intA = setInterval(()=>{
        if(this.map){
          clearInterval(intA);
          if(!isNaN(formData.a_lat) && !isNaN(formData.a_lon)){
            console.log("Setting mapCenter AND pin");
            ctx.map.setCenter(new google.maps.LatLng(formData.a_lat, formData.a_lon));
            ctx.setPin();
          }else{
            console.log("Could not set map center and pin. Invalid lat and lot.");
          }
        }
      },300);
    }
  }

  loadCard(){
    let ctx = this;
    ctx._id = this.navParams.get('_id');
    ctx.PPR.getUserBoundCard(ctx._id, {
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
        for(let index in data[0]){
          ctx.card[index.replace("CRD_", "")] = data[0][index];
        }
        ctx.originalCard = JSON.parse(JSON.stringify(ctx.card));
        ctx.setForm(ctx.card);
      }else{
        ctx.ALP.generateSimpleAlert("Error", "This card could not be loaded. Please try again later.")
      }
    })
    .catch((err)=>{
      console.log("Error result: ",err);
    });
  }

  loadMap(){
    let ctx = this;
    let latLng = new google.maps.LatLng(-34.9290, 158.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    ctx.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    ctx.mapLoaded = true;
  }

  ionViewDidLoad() {
    this.loadMap();
    this.setForm(this.card);
  }

  setPin(){
    if(typeof this.marker !== "undefined"){
      this.marker.setPosition(this.map.getCenter());
    }else{
      this.marker = new google.maps.Marker({
        position: this.map.getCenter(),
        map: this.map,
        draggable: false
      });
    }
  }

  locateSelf(){
    //Get our current position AND set the map center to it
  }

  storeCard(cardPayload){

  }

  updateCard(){

  }


}
