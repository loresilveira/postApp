import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { AlteraFotoPage } from '../altera-foto/altera-foto';
import {PostComponent} from '../../components/post/post';


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

  postCard;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.postCard = {
      usuario: "lorelima",
      titulo: "Post1",
      descricao: "Esse é o meu primeiro post Esse é o meu primeiro post  ",
      data: "09/01/2019"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  goToPostPage(){
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
