import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { AuthProvider } from '../../providers/auth/auth';
import hasha from 'hasha';
import { NativeStorage } from '@ionic-native/native-storage';
import { User } from '../model/user.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {
    "id":"",
    "nome": "",
    "senha": "",
    "manterLogado": false
  }

 public user: User;
  private cripto:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private native: NativeStorage) {
    }

    formatar()
    {
       var login = this.usuario.senha

       if(this.usuario.senha != undefined){
        login = login.replace(/\D/g, '');
        this.usuario.senha = login;
        console.log(this.usuario.senha);
       }

    }

  salvaUsuario(){

    this.cripto = hasha(this.usuario.senha,{algorithm:'sha256',encoding:'base64'});
    this.authProvider.postUsuario({login:this.usuario.nome,senha:this.cripto}).then((result) => {
    console.log( result);
    this.user = result;
    if(this.usuario.manterLogado){
      this.native.setItem("user", JSON.stringify(this.user))
      .then((result:any)=>{
        this.navCtrl.setRoot(PerfilPage, {'usuario':this.user});
      });
    }
    this.navCtrl.setRoot(PerfilPage, {'usuario':result});
    }) .catch((err) => {
      console.log(err);
    });


  }


}
