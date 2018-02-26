import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

//Owned Providers
import {SocketconnectionProvider} from "../providers/socketconnection/socketconnection";

//Configuration Object
import {Settings} from "../settings"

//Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
  //Settings
export const firebaseConfig = Settings.getFirebaseConfig();

//Socket.io Configuration
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = Settings.getSocketIOConfig();

//Testing Configuration
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
declare var Promise: any;

describe('Component: Root Component', () => {
  var fullData:any;
  var socketProv:any;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [MyApp, Page1, Page2],
          providers: [
            StatusBar,
            SplashScreen,
            SocketconnectionProvider,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
          ],
          imports: [
              IonicModule.forRoot(MyApp),
              BrowserModule,
              IonicModule.forRoot(MyApp, {}, { links: [] }),
              AngularFireModule.initializeApp(firebaseConfig),
              AngularFireAuthModule,
              SocketIoModule.forRoot(config)
          ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MyApp);
      comp    = fixture.componentInstance;
    });

    afterEach(() => {
      fixture.destroy();
      comp = null;
    });

    it('is created', () => {
      expect(fixture).toBeTruthy();
      expect(comp).toBeTruthy();
    });

    it("Should have initialized Socket.io", ()=>{
      socketProv = TestBed.get(SocketconnectionProvider);
      expect(typeof(socketProv.getSocket())).not.toBe("undefined");
    });

});
