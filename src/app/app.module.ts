import { Camera } from '@ionic-native/camera/ngx';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPageModule } from '../pages/login/login.module';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { AuthProvider } from '../providers/auth/auth';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { DetPostPageModule } from '../pages/det-post/det-post.module';
import { PostsPageModule } from '../pages/posts/posts.module';
import { PostagensProvider } from '../providers/postagens/postagens';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import { AvatarModule } from 'ng2-avatar';
import { MensagensPageModule } from '../pages/mensagens/mensagens.module';
import { AlteraFotoPageModule } from '../pages/altera-foto/altera-foto.module';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage

    
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    PerfilPageModule,
    DetPostPageModule,  
    PostsPageModule,
    HttpClientModule,
    HttpModule,
    AvatarModule,
    MensagensPageModule,
    AlteraFotoPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PostagensProvider,
    ScreenOrientation,
    Camera
   
    
  ]
})
export class AppModule {}
