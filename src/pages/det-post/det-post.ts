import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { PostagensProvider } from '../../providers/postagens/postagens';

/**
 * Generated class for the DetPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-det-post',
  templateUrl: 'det-post.html',
})
export class DetPostPage {

  public postCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public postagemProvider: PostagensProvider) {
    this.postCard = navParams.get('ultimoPost');
    console.log(this.postCard);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetPostPage');

    let data: Observable<any>;
    data = this.postagemProvider.getUltimoPost();
    data.subscribe(result => { this.postCard = result },
      error => console.log(error));
  }

}
