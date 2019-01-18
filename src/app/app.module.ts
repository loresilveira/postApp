import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPageModule } from '../pages/login/login.module';

import { MensagensPage } from '../pages/mensagens/mensagens';
import { DetPostPage } from '../pages/det-post/det-post';
import { AlteraFotoPage } from '../pages/altera-foto/altera-foto';
import { AuthProvider } from '../providers/auth/auth';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { DetPostPageModule } from '../pages/det-post/det-post.module';
import { PostComponent } from '../components/post/post';
import { PostsPageModule } from '../pages/posts/posts.module';
import { PostagensProvider } from '../providers/postagens/postagens';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {ScreenOrientation} from '@ionic-native/screen-orientation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MensagensPage,   
    AlteraFotoPage
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    PerfilPageModule,
    DetPostPageModule,  
    PostsPageModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MensagensPage,
    AlteraFotoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PostagensProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
