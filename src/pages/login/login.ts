import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AuthProvider } from '../../providers/auth/auth';
import hasha from 'hasha';


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

  usuario = {
  
    "nome": "",
    "senha": ""
  }

   
  private cripto:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider) {
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }
  
  salvaUsuario(){
    
    this.cripto = hasha(this.usuario.senha,{algorithm:'sha256',encoding:'base64'});
    this.authProvider.postUsuario({login:this.usuario.nome,senha:this.cripto}).then((result) => {
    console.log( result);
    this.navCtrl.setRoot(PerfilPage, {'usuario':result});
    }) .catch((err) => {
      console.log(err);
    });
     
    

  }
 
  goToPerfilPage() {
    
    
  }


}
