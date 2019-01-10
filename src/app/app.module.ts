import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilPage } from '../pages/perfil/perfil';
import { PostsPage } from '../pages/posts/posts';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { DetPostPage } from '../pages/det-post/det-post';
import { AlteraFotoPage } from '../pages/altera-foto/altera-foto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    PostsPage,
    MensagensPage,
    PostsPage,
    DetPostPage,
    AlteraFotoPage
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    PostsPage,
    MensagensPage,
    PostsPage,
    DetPostPage,
    AlteraFotoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
