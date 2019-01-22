import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostagensProvider } from '../../providers/postagens/postagens';
import { Observable } from 'rxjs';
import { DetPostPage } from '../det-post/det-post';


/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
 
   providers: [
    PostagensProvider
  ] 
})
export class PostsPage {


  public postCard:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider:PostagensProvider) {
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetPostPage');

    
    let data:Observable<any>;
    data = this.postagemProvider.getListaPosts();
    data.subscribe(result => {this.postCard = result}, 
      error =>console.log(error) );
      

  } 

  goToDetPost(){
    this.navCtrl.push(DetPostPage, {'detPost':this.postCard}  )
  }

}
