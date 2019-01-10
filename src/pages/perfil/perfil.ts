import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { AlteraFotoPage } from '../altera-foto/altera-foto';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  goToPostsPage(){
    this.navCtrl.push(PostsPage);
  }

  goToMensagensPage(){
    this.navCtrl.push(MensagensPage);
  }

  goToDetPostPage(){
    this.navCtrl.push(DetPostPage);
  }

  goToPageAlteraFoto(){
    this.navCtrl.push(AlteraFotoPage);
  }
}
