import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LoadingController, ToastController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  private url:string = "http://aulas2.getsandbox.com";
  public loading;

  constructor(public http: HttpClient, public loadingCtrl:LoadingController, public toastController:ToastController) {
    console.log('Hello AuthProvider Provider');
  }

  postUsuario(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url +'/login', data).subscribe(res => {
      resolve(res);
      }, (err) => {
      this.erroLoginToast();
      });
      });
    
  
  }

  abreCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando' 
    });

    this.loading.present();
  }

  fechaCarregando(){
    this.loading.dismiss();
  }

  async erroReq() {
    const toast = await this.toastController.create({
      message: 'Conecte-se a internet!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async loginToast() {
    const toast = await this.toastController.create({
      message: 'Login efetuado com sucesso!',
      duration: 2000
    });
    console.log('toast');
    toast.present();
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      message: 'Você saiu do app',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }

  async erroLoginToast() {
    const toast = await this.toastController.create({
      message: 'Usuário ou senha inválido!',
      duration: 3000
    });
    console.log('toast');
    toast.present();
  }


  

}
