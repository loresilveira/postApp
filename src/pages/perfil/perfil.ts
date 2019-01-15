import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PostsPage } from '../posts/posts';
import { MensagensPage } from '../mensagens/mensagens';
import { DetPostPage } from '../det-post/det-post';
import { AlteraFotoPage } from '../altera-foto/altera-foto';
import {PostComponent} from '../../components/post/post';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';


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
  providers: [
    PostagensProvider
  ]
})
export class PerfilPage {

   public postCard:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider: PostagensProvider) {
   
      this.postCard = {
      "autor": "",
      "titulo": "",
      "mensagem": "",
      "data": ""
      
   } 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');

    let data:Observable<any>;
    data = this.postagemProvider.getUltimoPost();
    data.subscribe(result => {this.postCard = result}, 
      error =>console.log(error) );

    /**
     * this.postagemProvider.getUltimoPost().subscribe(
      (data:PerfilPage) => {this.postCard = data; 
      console.log(this.postCard)},
              error   => console.log(error)
    
    );  
     */
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
