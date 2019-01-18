import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { FormBuilder, Validators } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
 
  nome='';
  senha='';

  usuario = {
    "id":"",
    "nome":"",
    "senha": ""
  }

 
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }



  goToPerfilPage(){
    this.navCtrl.push(PerfilPage); 
  }

}
