import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import {N1Page} from '../pages/n1/n1';
import {N3Page} from '../pages/n3/n3';
import {N4Page} from '../pages/n4/n4';
import {N5Page} from '../pages/n5/n5';
import {N6Page} from '../pages/n6/n6';
import {N7Page} from '../pages/n7/n7';
import {N8Page} from '../pages/n8/n8';

import { AngularFireAuth } from 'angularfire2/auth';
import {SocketconnectionProvider} from "../providers/socketconnection/socketconnection"

@Component({
  templateUrl: 'app.html'
  ,providers:[SocketconnectionProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = N1Page;
  rootPage: any;

  pages: Array<{ title: string, component: any, id:number }>;

  constructor(public platform: Platform, public statusBar: StatusBar
    , public splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: N4Page, id:1},
      { title: 'Owned Cards', component: N7Page, id:2 },  //Menu Pages...
      { title: 'Shared Cards', component: N8Page, id:3 },
      { title: 'Settings', component: N3Page, id:4 },
      //{ title: 'BackUp and Restore', component: N6Page, id:5 },
      { title: 'About', component: N5Page, id:6 }
    ];

    afAuth.auth.onAuthStateChanged((user)=>{
      if(user){
        this.rootPage = N7Page;
      }else{
        this.rootPage = N1Page;
      }
    });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
