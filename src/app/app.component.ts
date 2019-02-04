import { PerfilPage } from './../pages/perfil/perfil';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../pages/model/user.model';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  user: User;
  @ViewChild(Nav) nav: Nav;


 // rootPage:any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public screeorientation:ScreenOrientation,
    public nativeStorage: NativeStorage) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.nativeStorage.getItem("user").then((data: any) => {

        this.user = JSON.parse(data);
        statusBar.show();
        splashScreen.hide();
        this.nav.setRoot(PerfilPage,{'usuario': this.user });


      }).catch((err:any)=>{

        if(err.code == 2){
          statusBar.show();
          splashScreen.hide();
          this.nav.setRoot(LoginPage);

        }else{
          alert("Ocorreu um erro ao inicia: "+ JSON.stringify(err));
        }

      });


     // screeorientation.lock('portrait');

    });
  }
}


