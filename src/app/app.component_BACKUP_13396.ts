import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { LoginPage } from '../pages/login/login';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import { PerfilPage } from '../pages/perfil/perfil';
import { AuthProvider } from '../providers/auth/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any='';
  @ViewChild(Nav) nav: Nav;


 // rootPage:any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public screeorientation:ScreenOrientation,
    public authProvider : AuthProvider) {

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.show();
        splashScreen.hide();
        this.retornaStorage();    
      });

  }

  retornaStorage(){
      
    this.authProvider.getCheckbox().then((data)=> {
      if(data){
        this.rootPage = PerfilPage;
      } else{
        this.rootPage = LoginPage;        
      } 
    });
 
}

}


