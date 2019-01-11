import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    console.log('ionViewDidLoad DetPostPage');
  }

}
