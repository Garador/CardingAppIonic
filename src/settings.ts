123
export class Settings {
  constructor(){

  }


  static getFirebaseConfig(){
    return {
      apiKey: "AIzaSyCFfaSY4V14PZSK5mrKUN-YfFIIv0fGLmA",
      authDomain: "extremecard-356e1.firebaseapp.com",
      databaseURL: "https://extremecard-356e1.firebaseio.com",
      storageBucket: "extremecard-356e1.appspot.com",
      messagingSenderId: "1087916848952"
    };
  }
  static getSocketIOConfig(isProd){
    if(isProd){
      return { url: 'https://extremecards.herokuapp.com', options: {} };
    }else{
      return { url: 'http://localhost:3000', options: {} };
    }
  }
  static httpServerConfig(isProd){
    if(isProd){
      return { url: 'https://extremecards.herokuapp.com', options: {} };
    }else{
      return { url: 'http://localhost:3000', options: {} };
    }
  }

  static isProd(){
    return true;
  }

  static getBaseCardURL(isPrivate:boolean){
    if(isPrivate){
      return "/card/private/_id/vcf?p=pass";
    }else{
      return "/card/public/_id/vcf?p=pass";
    }
  }
}
