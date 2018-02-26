import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {Settings} from "../../settings"
import { AlertProvider } from "../../providers/alert/alert"
import { HttprequestServiceProvider } from "../../providers/httprequest-service/httprequest-service"

/**
 * Generated class for the N14Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var cordova;
@IonicPage()
@Component({
  selector: 'page-n14',
  templateUrl: 'n14.html',
})
export class N14Page {
  _id:any;
  width = 150;
  vis:number;
  baseURL = "";
  vcardURL:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public plat:Platform,
    private ALP:AlertProvider,
    public HTTPRS:HttprequestServiceProvider) {
    this._id = this.navParams.get('_id');
    this.vis = this.navParams.get('vis');
    console.log("_id: ",this._id);
    if(plat.isPortrait()){
      this.width = plat.width();
    }
    this.baseURL = Settings.httpServerConfig(Settings.isProd()).url;
    //this.setVCardLink();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad N14Page');
  }

  setVCardLink(){
    let ctx = this;
    let URL = Settings.getBaseCardURL(ctx.vis == 0).replace("_id", ctx._id);
    if(ctx.vis == 0){
      ctx.ALP.generateSimpleInputAlert({
        title:"Password"
        ,inputs:[{
          placeholder:"Pass for the Card"
          ,type:"password"
        }]
      })
      .then((data)=>{
        URL = this.baseURL+""+URL.replace("=pass", "="+data[0]);
        URL+="&nb=1";
        //Make GET request. If successfull, set link. If not, alert wrong password.
        ctx.HTTPRS.call({
          url:URL
        })
        .then((data:any)=>{
          console.log("Result: ",data);
          if(data.status == 200){
            URL = URL.replace("&nb=1", "");
            ctx.vcardURL = URL;
          }else{
            ctx.ALP.generateSimpleAlert("Error", "Invalid password. Cannot download vCard.");
          }
        })
        .catch((err)=>{
          console.log("err: ",err);
          if(!isNaN(err.status) && err.status == 403){
            ctx.ALP.generateSimpleAlert("Error", "Invalid password. Cannot download vCard.");
          }else{
            ctx.ALP.generateSimpleAlert("Error", "Can't download card now. Please try again later.");
          }
        });
      })
      .catch((err)=>{
        console.log(err);
      });
    }
    //var ref = cordova.InAppBrowser.open(url, target, options);
  }

}
