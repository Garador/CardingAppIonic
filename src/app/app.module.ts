import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { QRCodeModule } from 'angular2-qrcode';



import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

//Configuration Object
import {Settings} from "../settings"

//Firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
  //Settings
export const firebaseConfig = Settings.getFirebaseConfig();
//Storage
import {LocalStorageWorker} from '../providers/localstorageworker/localstorage';

//Socket.io Configuration
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { AuthProvider } from '../providers/auth/auth';
import { SocketconnectionProvider } from '../providers/socketconnection/socketconnection';
import { HttprequestServiceProvider } from '../providers/httprequest-service/httprequest-service';
const config: SocketIoConfig = Settings.getSocketIOConfig(Settings.isProd());

//Pages Import.
import { N1Page } from '../pages/n1/n1';
import { N2Page } from '../pages/n2/n2';
import { N3Page } from '../pages/n3/n3';
import { N4Page } from '../pages/n4/n4';
import { N5Page } from '../pages/n5/n5';
import { N6Page } from '../pages/n6/n6';
import { N7Page } from '../pages/n7/n7';
import { N8Page } from '../pages/n8/n8';
import { N9Page } from '../pages/n9/n9';
import { N11Page } from '../pages/n11/n11';
import { N12Page } from '../pages/n12/n12';
import { N13Page } from '../pages/n13/n13';
import { N14Page } from '../pages/n14/n14';
import { N15Page } from '../pages/n15/n15';
import { InputValidatorProvider } from '../providers/input-validator/input-validator';
import { AddressesProvider } from '../providers/addresses/addresses';
import { AlertProvider } from '../providers/alert/alert';
import { SystemMessagesProvider } from '../providers/system-messages/system-messages';
import { ProfileProvider } from '../providers/profile/profile';

import { Camera } from '@ionic-native/camera';
import { CardsProvider } from '../providers/cards/cards';
import { LocationProvider } from '../providers/location/location';
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    N1Page,
    N2Page,
    N3Page,
    N4Page,
    N5Page,
    N6Page,
    N7Page,
    N8Page,
    N9Page,
    N11Page,
    N12Page,
    N13Page,
    N14Page,
    N15Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, { links: [] }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    N1Page,
    N2Page,
    N3Page,
    N4Page,
    N5Page,
    N6Page,
    N7Page,
    N8Page,
    N9Page,
    N11Page,
    N12Page,
    N13Page,
    N14Page,
    N15Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    SocketconnectionProvider,
    HttprequestServiceProvider,
    InputValidatorProvider,
    LocalStorageWorker,
    AddressesProvider,
    AlertProvider,
    SystemMessagesProvider,
    ProfileProvider,
    Camera,
    Geolocation,
    CardsProvider,
    CardsProvider,
    LocationProvider,
    SettingsProvider
  ]
})
export class AppModule { }
