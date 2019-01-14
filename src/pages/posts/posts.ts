import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

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
})
export class PostsPage {


  postCard:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
 this.postCard = [
  {
    "titulo": "post1",
    "descricao": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "usuario": "lorelima",
    "data": "09/10/2019"
  },
  {
    "titulo": "post2",
    "descricao": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "usuario": "lorelima",
    "data": "09/10/2019"
  },
  {
    "titulo": "post3",
    "descricao": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "usuario": "lorelima",
    "data": "09/10/2019"
  },
  {
    "titulo": "post4",
    "descricao": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "usuario": "lorelima",
    "data": "09/10/2019"
  },
  {
    "titulo": "post5",
    "descricao": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "usuario": "lorelima",
    "data": "09/10/2019"
  }
   
];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetPostPage');
  }

}
